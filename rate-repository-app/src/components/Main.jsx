import React from "react";
import { StyleSheet, View } from "react-native";
import { Redirect, Route, Switch } from "react-router-native";

import Constants from "expo-constants";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import SignIn from "./SignIn";



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarTab label="Repositories" linkTo="/" />
        <AppBarTab label="Sign In" linkTo="/signin" />
      </AppBar>

      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Redirect to="/signin" />
        <Route exact path="/">
          <RepositoryList />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
