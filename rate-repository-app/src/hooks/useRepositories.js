import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";



const useRepositories = (variables) => {
  const { data, fetchMore, error, loading, ...queryResult } =
    useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables,
    });

  const canFetchMore = () => {
    return !loading && data?.repositories.pageInfo.hasNextPage;
  };

  const handleFetchMore = () => {
    if (!canFetchMore()) {
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
    fetchMore: handleFetchMore,
    canFetchMore,
    error,
    loading,
    ...queryResult,
  };
};

export default useRepositories;
