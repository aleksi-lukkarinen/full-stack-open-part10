import React from "react";
import { useParams } from "react-router";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";



const RepositoryDetails = () => {
  const params = useParams();
  const repoId = params.repoId;
  const { repository, error, loading } =
    useRepository(repoId);

  if (loading || error || !repository) {
    return <></>;
  }

  return (
    <>
      <RepositoryItem
        item={repository}
        showDetailViewButtons={true} />
    </>
  );
};

export default RepositoryDetails;
