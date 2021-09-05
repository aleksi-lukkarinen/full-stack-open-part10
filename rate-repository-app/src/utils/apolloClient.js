import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Constants from "expo-constants";



const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloURI,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken =
        await authStorage.getAccessToken();
      const authorization = accessToken
        ? `Bearer ${accessToken}`
        : "";

      const augmentedHeaders = {
        headers: {
          ...headers,
          "authorization": authorization
        },
      };

      return augmentedHeaders;
    }
    catch (e) {
      console.log(e);
      return {
        headers
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
