import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
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
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem item={item} />
      )} />
  );
};


const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer
      repositories={repositories} />;
};

export default RepositoryList;
