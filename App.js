import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// font
import * as Font from "expo-font";
import { AppLoading } from "expo";
// navigator
import MealsNavigator from "./navigation/MealsNavigator";
// load fontFamily to assets folder
const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  // state for load font
  const [fontLoaded, setFontLoaded] = useState(false);
  //
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  //
  return (
    <MealsNavigator />
  );
}


