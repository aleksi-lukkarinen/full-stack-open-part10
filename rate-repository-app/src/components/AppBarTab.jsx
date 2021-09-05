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
  let content = <AppBarTabText>{label}</AppBarTabText>;

  if (linkTo) {
    content = (
      <Link to={linkTo}>
        <>{ content }</>
      </Link>
    );
  }

  if (pressHandler) {
    content = (
      <Pressable onPress={ pressHandler }>
        <>{ content }</>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <>{ content }</>
    </View>
  );
};

export default AppBarTab;
