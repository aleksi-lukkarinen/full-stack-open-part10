import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
      <ScrollView horizontal={true}>
        { children }
      </ScrollView>
    </View>
  );
};

export default AppBar;
