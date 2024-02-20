import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{ height: 100, alignItems: "center", justifyContent: "flex-end" }}
    >
      <Text style={{ color: "white" }}>Header</Text>
    </View>
  );
};

export default Header;
