import React from "react";
import { AppRegistry } from "react-native";
import { NativeRouter } from "react-router-native";
import { Provider as PaperProvider } from 'react-native-paper';

import { ApolloProvider } from "@apollo/client";

import Constants from 'expo-constants';
import AuthStorage from "./src/utils/authStorage";
import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/components/Main";
import AuthStorageContext from "./src/contexts/AuthStorageContext";



const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};

const appName = Constants.manifest.name;
AppRegistry.registerComponent(appName, App);

export default App;
