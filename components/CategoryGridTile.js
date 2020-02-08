import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {" "}
            {props.title}{" "}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};
// css
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    // elevation for android
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 14,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    // shadow for IOS
    shadowColor: "black",
    shadowOpacity: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  title: {
    fontSize: 20,
    color: '#231942' ,
    textAlign: "right"
  }
});

export default CategoryGridTile;
