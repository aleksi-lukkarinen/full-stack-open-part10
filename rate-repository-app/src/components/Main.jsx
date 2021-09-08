import React from "react";
import { StyleSheet, View } from "react-native";
import { Redirect, Route, Switch, useHistory } from "react-router-native";

import { useApolloClient, useQuery } from "@apollo/client";

import Constants from "expo-constants";

import { GET_AUTHORIZED_USER } from "../graphql/queries";
import theme from "../theme";
import useAuthStorage from "../hooks/useAuthStorage";
import AppBar from "./AppBar";
import AppBarTab from "./AppBarTab";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import RepositoryDetails from "./RepositoryDetails";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    marginTop: Constants.statusBarHeight,
    fontFamily: theme.fonts.main,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push("/");
  };

  const handleCreatingReview = () => {
    history.push("/createReview");
  };

  const {
    data: userQueryResult,
    error: errorWithUserQuery,
    loading: userQueryLoading } =
        useQuery(GET_AUTHORIZED_USER, {
          fetchPolicy: "no-cache"
        });

  if (errorWithUserQuery) {
    console.log(errorWithUserQuery);
  }

  const isUserLoggedIn =
    !userQueryLoading
    && userQueryResult
    && userQueryResult.authorizedUser;

  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarTab label="Repositories" linkTo="/" />
        { isUserLoggedIn
            ? <>
                <AppBarTab
                    label="Create a Review"
                    pressHandler={handleCreatingReview} />
                <AppBarTab
                    label="Sign Out"
                    pressHandler={handleSignOut} />
              </>
            : <>
                <AppBarTab
                    label="Sign In"
                    linkTo="/signIn" />
                <AppBarTab
                    label="Sign Up"
                    linkTo="/signUp" />
              </>
        }
      </AppBar>

      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/createReview">
          <CreateReview />
        </Route>
        <Route path="/repoDetails/:repoId">
          <RepositoryDetails />
        </Route>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Redirect to="/createReview" />
      </Switch>
    </View>
  );
};

export default Main;
