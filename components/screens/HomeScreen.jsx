import { View, Pressable, Text, ImageBackground } from "react-native";
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
  HeaderHorizontalItems,
  BodyComponent,
}) => {
  const scrollRef = useRef();
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
      } else if (offset.value < -77) {
        offset.value = -77;
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
        offset.value = -77;
        return;
      }
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
  const animatedStyles4 = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        offset.value,
        [-30, -77],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const _onLayout = (event) => {
    console.log(event.nativeEvent.layout);
  };
  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[animatedStyles3, { flex: 1 }]}>
        <ImageBackground
          blurRadius={1}
          imageStyle={{ height: "70%" }}
          source={img}
          style={{ flex: 1 }}
        >
          <Animated.View
            style={[
              {
                position: "relative",
                backgroundColor: "transparent",
              },
              animatedStyles,
            ]}
          >
            <Animated.View
              style={[
                { backgroundColor: "transparent", height: 150 },
                animatedStyles3,
              ]}
            >
              <View onLayout={_onLayout} style={{ justifyContent: "center" }}>
                <Animated.Text
                  style={[
                    {
                      height: 100,
                      color: "red",

                      top: "50%",
                      left: 30,
                      fontSize: 30,
                    },
                    animatedStyles4,
                  ]}
                >
                  {`Header `}
                </Animated.Text>
              </View>
              <ScrollView
                horizontal
                style={[{ height: 50, backgroundColor: "transparent" }]}
                contentContainerStyle={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
                <Text style={{ color: "red", width: 80 }}>aaaa</Text>
              </ScrollView>
            </Animated.View>
            <ScrollView
              ref={scrollRef}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={refresh} />
              }
            >
              <View style={{ gap: 10 }}>
                <Pressable
                  style={{ height: 100, backgroundColor: "#020826" }}
                />
                <View style={{ height: 100 }}>
                  <ScrollView
                    scrollEnabled
                    horizontal
                    style={{ backgroundColor: "transparent", flex: 1 }}
                    contentContainerStyle={{ gap: 10 }}
                  >
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        backgroundColor: "red",
                      }}
                    />
                  </ScrollView>
                </View>
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
                <View style={{ height: 100, backgroundColor: "#020826" }} />
              </View>
            </ScrollView>
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    </GestureDetector>
  );
};
