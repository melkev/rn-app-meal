import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// components
import CustomHeaderButton from "../components/HeaderButton";
//
import Colors from "../constants/Color";
//
const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.text} > {props.label} </Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : "white"}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isglutenFree, setIsGlutenFree] = useState(false);
  const [isLactosFree, setIsLactosFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>available filters / restriction</Text>
      <FilterSwitch
        label="GlutenFree"
        state={isglutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactos-free"
        state={isLactosFree}
        onChange={newValue => setIsLactosFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 12
  },

});

export default FiltersScreen;
