import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const HeaderList = () => {
  return (
    <ScrollView
      horizontal
      scrollEnabled={true}
      overScrollMode="always"
      contentContainerStyle={{ gap: 10, height: 30 }}
    >
      <View style={{ width: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, backgroundColor: "red" }} />
    </ScrollView>
  );
};

export default HeaderList;
