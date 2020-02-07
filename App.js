import React, { useState } from "react";

// font
import { AppLoading } from "expo";
import * as Font from "expo-font";
// navigate
import { useScreens, enableScreens } from "react-native-screens";
// navigator
import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

// load fontFamily to assets folder
const fetchFonts = () => {
  return Font.loadAsync({
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
  return <MealsNavigator />;
}
