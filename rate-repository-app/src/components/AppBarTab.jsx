import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import AppBarTabText from "./AppBarTabText";



const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
});

const AppBarTab = ({ label, pressHandler, linkTo }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={pressHandler}>
        <Link to={linkTo}>
          <AppBarTabText>{label}</AppBarTabText>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
