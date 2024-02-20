import { ImageBackground, StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import img from "../../assets/img.jpg";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export default HomeScreen = ({
  MainHeader,
  HeaderComponent,
  BodyComponent,
}) => {
  const scrollRef = useRef();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const refresh = async () => {
    setRefreshing(true);
    await sleep(1000);
    setRefreshing(false);
  };
  const offset = useSharedValue(0);
  const pan = Gesture.Pan()
    .runOnJS(true)
    .onChange((event) => {
      if (offset.value > 0) {
        offset.value = 0;
        return;
      } else if (offset.value < -scrollHeight) {
        offset.value = -scrollHeight;
        return;
      }
      offset.value += event.changeY / 1.2;
    })
    .onEnd((event) => {
      if (event.velocityY > 1000) {
        offset.value = 0;
        return;
      }
      if (event.velocityY < -800) {
        offset.value = -scrollHeight;
        return;
      }
    })
    .simultaneousWithExternalGesture(scrollRef);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withClamp(
            { min: -scrollHeight, max: 0 },
            withSpring(offset.value, {
              mass: 1,
              damping: 10,
              stiffness: 32,
              overshootClamping: true,
              restDisplacementThreshold: 1,
              restSpeedThreshold: 1,
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
        [-scrollHeight + 10, -scrollHeight],
        [0, 1],
        Extrapolation.CLAMP
      ),
    };
  });
  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        offset.value,
        [0, -scrollHeight],
        ["transparent", "#000000"]
      ),
    };
  });
  const animatedStyles4 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        offset.value,
        [-30, -scrollHeight],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const _onLayout = (event) => {
    setScrollHeight(event.nativeEvent.layout.height - StatusBar.currentHeight);
  };
  return (
    <GestureDetector gesture={pan}>
      <ImageBackground
        blurRadius={1}
        imageStyle={{ height: "70%" }}
        source={img}
        style={{ flex: 1, backgroundColor: "black" }}
      >
        <Animated.View
          style={[
            {
              position: "relative",
              backgroundColor: "transparent",
            },
            animatedStyles,
            animatedStyles3,
          ]}
        >
          <Animated.View
            style={[
              { backgroundColor: "transparent", width: "100%" },
              animatedStyles3,
            ]}
          >
            <Animated.View
              onLayout={_onLayout}
              style={[{ justifyContent: "center" }, animatedStyles4]}
            >
              {MainHeader && <MainHeader />}
            </Animated.View>
            {HeaderComponent && <HeaderComponent />}
          </Animated.View>
          <ScrollView
            ref={scrollRef}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
            contentContainerStyle={{ gap: 10 }}
          >
            {BodyComponent && <BodyComponent />}
          </ScrollView>
        </Animated.View>
      </ImageBackground>
    </GestureDetector>
  );
};
