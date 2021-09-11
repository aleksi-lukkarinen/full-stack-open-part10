import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";



const useRepository = (variables) => {
  const { data, fetchMore, error, loading, ...queryResult } =
    useQuery(GET_REPOSITORY, {
      fetchPolicy: "cache-and-network",
      variables,
    });

  const canFetchMoreReviews = () => {
    const hasMoreData = data?.repository?.reviews.pageInfo.hasNextPage;
    return !loading && hasMoreData;
  };

  const handleFetchMoreReviews = () => {
    if (!canFetchMoreReviews()) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        afterReview: data.repository.reviews.pageInfo.endCursor,
        firstNReviews: 20,
      }
    });
  };

  return {
    repository: data?.repository,
    fetchMoreReviews: handleFetchMoreReviews,
    canFetchMoreReviews,
    error,
    loading,
    ...queryResult,
  };
};

export default useRepository;
