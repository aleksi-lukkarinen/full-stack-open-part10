import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";



const useRepositories = (searchKeyword, sortOrder, sortDirection) => {
  const { data, error, loading } =
    useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables: { searchKeyword, sortOrder, sortDirection, },
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
