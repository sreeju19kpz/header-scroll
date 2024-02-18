import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/screens/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default Main = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "transparent" }}>
      <NavigationContainer theme={{ colors: { background: "transparent" } }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { color: "red", backgroundColor: "transparent" },
            tabBarStyle: {
              elevation: 0,
              backgroundColor: "transparent",
              position: "absolute",
            },
            tabBarIconStyle: { display: "none" },
            headerShown: false,
            tabBarContentContainerStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab.Screen name="Home" children={HomeScreen} />
          <Tab.Screen name="wddd  " component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
/*  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current; */

/*  const [y, setY] = useState({ value: 100, direction: "d" });
  const setValues = (data) => {
    setY((prev) => ({ value: prev > data ? -data : data }));
  }; */

//  const translateY = useSharedValue(100);

/*  const clampedStyleWithDelay = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withClamp(
          { min: 0, max: 100 },
          withTiming(y, {
            duration: 100,
            easing: Easing.linear,
            reduceMotion: ReduceMotion.System,
          })
        ),
      },
    ],
  })); */

/*   const animatedStyles = useAnimatedStyle(() => ({
    height: interpolate(y, [0, 100], [100, 0], Extrapolation.CLAMP),
  })); */

/*  const animatedStyles = useAnimatedStyle(() => ({
    height: withClamp(
      { min: 0, max: 100 },
      withTiming(y.value, {
        duration: 300,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      })
    ),
  })); */

/*  const handlePress = (data) => {
    console.log(data);
    translateY.value = 100 - data;
  }; */

{
  /* <ScrollView
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollOffsetY },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          stickyHeaderHiddenOnScroll={true}
          stickyHeaderIndices={[0]}
        ></ScrollView> */
}

/* onScroll={Animated.event(
  [
    {
      nativeEvent: {
        contentOffset: { y: scrollOffsetY },
      },
    },
  ],
  {
    useNativeDriver: false,
  }
)} */

{
  /*   <HomeScreen /> */
}

{
  /*  <Tab.Navigator
              screenOptions={{
                tabBarContentContainerStyle: {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="wd" component={HomeScreen} />
            </Tab.Navigator> */
}

{
  /* <ScrollView
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          stickyHeaderHiddenOnScroll
          stickyHeaderIndices={[0, 1]}
        >
          <View style={{ height: 50, backgroundColor: "white" }} />
          <View style={{ height: 100, backgroundColor: "red" }} />
          <HomeScreen />
        </ScrollView> */
}

/*   <ScrollView>
          <View style={{ height: 60 }} />
          <View style={{ height: height - StatusBar.currentHeight + 30 }}>
            <Tab.Navigator
              screenOptions={{
                tabBarContentContainerStyle: {
                  backgroundColor: "transparent",
                  display: "flex",
                },
              }}
            >
              <Tab.Screen name="Home" children={() => <HomeScreen />} />
              <Tab.Screen name="wd" component={HomeScreen} />
            </Tab.Navigator>
          </View>
        </ScrollView> */

/*  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 30);
  const translateY = useMemo(
    () =>
      Animated.diffClamp(scrollY, 0, 30).interpolate({
        inputRange: [0, 100],
        outputRange: [0, -100],
      }),
    [scrollY]
  ); */

/*  const diffClamp = Animated.diffClamp(scrollY, 0, 100);
  const translateY = useMemo(
    () =>
      diffClamp.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -1],

        useNativeDriver: true,
      }),
    [scrollY]
  ); */

/*  const offset = useMemo(
    () =>
     Animated.diffClamp(
            scrollAnimatedValue
              .interpolate({
                extrapolateLeft: 'clamp',
                inputRange: [layoutY, layoutY + 1],
                outputRange: ([0, 1]),
              })
           ,
            -layoutHeight,
            0,
          )
       
    [scrollAnimatedValue, layoutHeight, layoutY, hiddenOnScroll],
  ); */

/*  useEffect(() => {
    const interval = setInterval(() => {
      console.log(translateY);
    }, 1000);

    return () => clearInterval(interval);
  }); */

/*  if (
        (height.value < 0 && prev - data < 0) ||
        (height.value > 100 && prev - data > 0)
      ) {
        return data;
      }
      if (prev - data < 0 && height.value > 0) {
        height.value =
          height.value + prev - data > 100 ? 100 : height.value + prev - data;
        return data;
      }
      if (prev - data > 0 && height.value < 100) {
        height.value =
          height.value + prev - data < 0 ? 0 : height.value + prev - data;  
        return data;
      } */

//  width.value += 50;

/*   const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, 160],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  }); */

/*
const offset = useSharedValue(0);
  const scrollRef = useRef();

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onChange((event) => {
      if (offset.value > 0) {
        offset.value = 0;
        return;
      } else if (offset.value < -77) {
        offset.value = -77;
        return;
      }
      offset.value += event.changeY;
    })
    .simultaneousWithExternalGesture(scrollRef);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withClamp(
            { min: -77, max: 0 },
            withSpring(offset.value, {
              mass: 1,
              damping: 10,
              stiffness: 32,
              overshootClamping: true,
              restDisplacementThreshold: 50,
              restSpeedThreshold: 50,
              reduceMotion: ReduceMotion.Always,
            })
          ),
        },
      ],
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        offset.value,
        [-66, -77],
        [0, 1],
        Extrapolation.CLAMP
      ),
    };
  });
  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        offset.value,
        [0, -77],
        ["transparent", "#000000"]
      ),
    };
  });
   
 
        export default Main = () => {
  const height = Dimensions.get("window").height;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "transparent" }}>
    <ImageBackground
          source={img}
          style={{ flex: 1, backgroundColor: "black" }}
          blurRadius={10}
        >
          <Animated.View style={[animatedStyles3, { flex: 1 }]}>
            <GestureDetector gesture={pan}>
              <Animated.View
                style={[
                  {
                    position: "relative",
                  },
                  animatedStyles,
                ]}
              >
                <Animated.View
                  style={[
                    { height: 100, backgroundColor: "transparent" },
                    animatedStyles2,
                  ]}
                />
                <View style={{ height: height }}>
      <NavigationContainer theme={{ colors: { background: "transparent" } }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { color: "red" },

            tabBarContentContainerStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            children={() => <HomeScreen ref={olscrlRef} />}
          />
          <Tab.Screen name="wd" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </View>
              </Animated.View>
            </GestureDetector>
          </Animated.View>
        </ImageBackground>
    </GestureHandlerRootView>
  );
};
 */
