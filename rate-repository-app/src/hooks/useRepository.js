import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";



const useRepository = (repoId) => {
  const { data, error, loading } =
    useQuery(GET_REPOSITORY, {
      variables: {repoId},
      fetchPolicy: "cache-and-network",
    });

  if (loading || error) {
    return {
      repository: null,
      loading,
      error,
    };
  }

  return {
    repository: data.repository,
    loading,
    error,
  };
};

export default useRepository;
