import React from "react";
import { Text, Pressable, View, StyleSheet, ScrollView } from "react-native";
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from "@react-navigation/native";
import Header from "./Header";

export default CustomNavigator = ({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) => {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });
  return (
    <NavigationContent>
      <ScrollView
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[3]}
        StickyHeaderComponent={Header}
      >
        <View style={{ height: 100 }} />
        <View style={[{ flexDirection: "row" }, tabBarStyle]}>
          {state.routes.map((route, index) => (
            <Pressable
              key={route.key}
              onPress={() => {
                const isFocused = state.index === index;
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.dispatch({
                    ...TabActions.jumpTo(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              style={{ flex: 1 }}
            >
              <Text>{descriptors[route.key].options.title ?? route.name}</Text>
            </Pressable>
          ))}
        </View>
        <View style={{ height: 700 }}>
          <ScrollView
            nestedScrollEnabled
            contentContainerStyle={[{ height: 1000 }, contentStyle]}
          >
            {state.routes.map((route, i) => {
              return (
                <View
                  key={route.key}
                  style={[
                    StyleSheet.absoluteFill,
                    { display: i === state.index ? "flex" : "none" },
                  ]}
                >
                  {descriptors[route.key].render()}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </NavigationContent>
  );
};

export const createMyNavigator = createNavigatorFactory(CustomNavigator);
