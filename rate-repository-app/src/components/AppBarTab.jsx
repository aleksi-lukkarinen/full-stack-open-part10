import React from "react";
import { View, Pressable } from "react-native";
import AppBarTabText from "./AppBarTabText";



const AppBarTab = ({ label, pressHandler }) => {
  return (
    <View>
      <Pressable onPress={pressHandler}>
        <AppBarTabText>{label}</AppBarTabText>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
