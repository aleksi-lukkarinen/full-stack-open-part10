import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";



const useRepositories = (variables) => {
  const { data, fetchMore, error, loading, ...queryResult } =
    useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables,
    });

  const canFetchMoreRepositories = () => {
    return !loading && data?.repositories.pageInfo.hasNextPage;
  };

  const handleFetchMoreRepositories = () => {
    if (!canFetchMoreRepositories()) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
        first: 20,
      }
    });
  };

  return {
    repositories: data?.repositories,
    fetchMoreRepositories: handleFetchMoreRepositories,
    canFetchMoreRepositories,
    error,
    loading,
    ...queryResult,
  };
};

export default useRepositories;
