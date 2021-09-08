import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";



const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signIn = async (username, password) => {
    const result = await mutate({
      variables: { username, password }
    });

    const user = result.data.createUser;

    return user;
  };

  return [signIn, result];
};

export default useCreateUser;
