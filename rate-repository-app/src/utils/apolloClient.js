import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import Constants from "expo-constants";



const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloURI,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
  },
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
    cache,
  });
};

export default createApolloClient;
