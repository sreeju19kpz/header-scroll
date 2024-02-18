import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Main from "./Main";

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style="light" />
    </>
  );
}
