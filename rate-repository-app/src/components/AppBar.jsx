import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 1,
    backgroundColor: theme.colors.backgroundInverted,
  },
});

const AppBar = ({ children }) => {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
};

export default AppBar;
