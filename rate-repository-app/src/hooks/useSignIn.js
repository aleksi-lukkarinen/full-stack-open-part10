import { useApolloClient, useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";

import useAuthStorage from "./useAuthStorage";



const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async (username, password) => {
    const result = await mutate({
      variables: { username, password }
    });

    const token = result.data.authorize.accessToken;

    await authStorage.setAccessToken(token);
    await apolloClient.resetStore();

    return result;
  };

  return [signIn, result];
};

export default useSignIn;
