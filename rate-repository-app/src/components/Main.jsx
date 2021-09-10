import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Redirect, Route, Switch, useHistory } from "react-router-native";

import { useApolloClient, useQuery } from "@apollo/client";

import { useDebounce } from "use-debounce";

import Constants from "expo-constants";
import * as C from "../constants";

import { REPO_LIST_SORTING_OPTIONS } from "../constants";
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

  const [directSearchExpression, setSearchExpression] = useState("");
  const [searchExpression] =
      useDebounce(directSearchExpression, 500);

  const [currentRepoListSorting, setCurrentRepoListSorting] =
    useState(REPO_LIST_SORTING_OPTIONS[0]);

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push(C.PATH_ROOT);
  };

  const handleCreatingReview = () => {
    history.push(C.PATH_CREATE_REVIEW);
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

  const tabsForLoggedInUsers = (
    <>
      <AppBarTab
          label="Create a Review"
          pressHandler={handleCreatingReview} />
      <AppBarTab
          label="Sign Out"
          pressHandler={handleSignOut} />
    </>
  );

  const tabsForUnknownUsers = (
    <>
      <AppBarTab
          label="Sign In"
          linkTo={C.PATH_SIGN_IN} />
      <AppBarTab
          label="Sign Up"
          linkTo={C.PATH_SIGN_UP} />
    </>
  );

  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarTab label="Repositories" linkTo={C.PATH_ROOT} />
        { isUserLoggedIn
            ? tabsForLoggedInUsers
            : tabsForUnknownUsers }
      </AppBar>

      <Switch>
        <Route path={C.PATH_SIGN_IN}>
          <SignIn />
        </Route>

        <Route path={C.PATH_SIGN_UP}>
          <SignUp />
        </Route>

        <Route path={C.PATH_CREATE_REVIEW}>
          <CreateReview />
        </Route>

        <Route path={C.PATH_REPO_DETAILS_PARAM}>
          <RepositoryDetails />
        </Route>

        <Route exact path={C.PATH_ROOT}>
          <RepositoryList
              directSearchExpression={directSearchExpression}
              searchExpression={searchExpression}
              setSearchExpression={setSearchExpression}
              currentSorting={currentRepoListSorting}
              setCurrentSorting={setCurrentRepoListSorting} />
        </Route>

        <Redirect to={C.PATH_ROOT} />
      </Switch>
    </View>
  );
};

export default Main;
