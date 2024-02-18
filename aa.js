const Scrollable = () => {
  const largeHeaderSize = useState({
    height: 0,
    y: 0,
  });

  const animatedValueScrollY = useRef(new Animated.Value(0));
  const [scrollY, setScrollY] = useState(0);

  const headerOpacity = animatedValueScrollY.current.interpolate({
    inputRange: [0, largeHeaderSize.height],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView>
      <Animated.View
        style={{
          borderBottomWidth:
            scrollY >= largeHeaderSize.height ? StyleSheet.hairlineWidth : 0,
        }}
      >
        <View>
          <Animated.View style={{ zIndex: 1, opacity: headerOpacity }}>
            <Text>Title</Text>
          </Animated.View>
        </View>
      </Animated.View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedValueScrollY } } }],
          {
            useNativeDriver: true,
            listener: (event) => setScrollY(event.nativeEvent.contentOffset.y),
          }
        )}
        scrollEventThrottle={16}
        contentInset={{
          top: 0,
          bottom: 50,
        }}
        contentOffset={{
          y: 0,
        }}
      />
    </SafeAreaView>
  );
};
