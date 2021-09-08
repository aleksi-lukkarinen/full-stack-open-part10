import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";



const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (ownerName, repositoryName, rating, text) => {
    const result = await mutate({
      variables: { ownerName, repositoryName, rating, text }
    });

    return result;
  };

  return [createReview, result];
};

export default useCreateReview;
