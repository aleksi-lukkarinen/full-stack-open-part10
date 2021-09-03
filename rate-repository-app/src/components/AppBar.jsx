import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";



const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
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
