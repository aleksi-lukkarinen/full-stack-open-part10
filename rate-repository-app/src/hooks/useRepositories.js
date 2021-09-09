import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";



const useRepositories = (sortOrder, sortDirection) => {
  const { data, error, loading } =
    useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables: { sortOrder, sortDirection, },
    });

  if (loading || error) {
    return {
      repositories: null,
      loading,
      error,
    };
  }

  return {
    repositories: data.repositories,
    loading,
    error,
  };
};

export default useRepositories;
