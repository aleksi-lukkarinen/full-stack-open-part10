import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router";

import theme from "../theme";
import useRepository from "../hooks/useRepository";
import RepositoryListItem from "./RepositoryListItem";
import ReviewItem from "./ReviewItem";



const RepositoryDetails = () => {
  const params = useParams();
  const repoId = params.repoId;

  const {
    repository,
    fetchMoreReviews,
  } = useRepository({
    repoId,
    firstNReviews: 10,
  });

  const onEndReached = () => {
    fetchMoreReviews();
  };

  const reviewNodes = repository?.reviews
    ? repository?.reviews?.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
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


const styles = StyleSheet.create({
  separator: {
    height: 6,
    backgroundColor: theme.colors.separator,
  },
});

const ItemSeparator = () =>
    <View style={styles.separator} />;
