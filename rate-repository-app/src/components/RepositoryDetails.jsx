import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router";

import theme from "../theme";
import useRepository from "../hooks/useRepository";
import RepositoryListItem from "./RepositoryListItem";
import ReviewItem from "./ReviewItem";



const styles = StyleSheet.create({
  separator: {
    height: 6,
    backgroundColor: theme.colors.separator,
  },
});

const ItemSeparator = () =>
    <View style={styles.separator} />;


const RepositoryDetails = () => {
  const params = useParams();
  const repoId = params.repoId;
  const { repository, error, loading } =
    useRepository(repoId);

  if (loading || error || !repository) {
    return <></>;
  }

  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({item}) => <ReviewItem review={item} />}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() =>
        <RepositoryListItem
          item={repository}
          showDetailViewButtons={true} />
      }/>
  );
};

export default RepositoryDetails;
