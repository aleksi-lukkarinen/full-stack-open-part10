import React from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useHistory } from "react-router-native";

import useRepositories from "../hooks/useRepositories";
import theme from "../theme";
import RepositoryItem from "./RepositoryItem";




const styles = StyleSheet.create({
  separator: {
    height: 6,
    backgroundColor: theme.colors.separator,
  },
});

const ItemSeparator = () =>
    <View style={styles.separator} />;


export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  const handleRepoItemPress = (repoId) => {
    history.push(`/repoDetails/${repoId}`);
  };

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleRepoItemPress(item.id)}>
          <RepositoryItem
            item={item}
            showDetailViewButtons={false} />
        </Pressable>
      )} />
  );
};


const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer
      repositories={repositories} />;
};

export default RepositoryList;
