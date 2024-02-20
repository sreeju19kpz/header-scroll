import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
import Header from "../components/Header";
import HeaderList from "../components/HeaderList";
import Body from "../components/Body";

const Screen = () => {
  return (
    <HomeScreen
      MainHeader={Header}
      HeaderComponent={HeaderList}
      BodyComponent={Body}
    />
  );
};

export default Screen;
