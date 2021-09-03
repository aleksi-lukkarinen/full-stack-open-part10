import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import AppBarTab from "./AppBarTab";
import theme from "../theme";



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const handleTabPress = (event) => {
    console.log("View name pressed:", event);
  };

  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarTab
          label="Repositories"
          pressHandler={handleTabPress} />
      </AppBar>
      <RepositoryList />
    </View>
  );
};

export default Main;
