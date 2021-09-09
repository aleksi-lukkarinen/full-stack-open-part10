import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useHistory } from "react-router-native";
import { Menu, IconButton } from "react-native-paper";

import { REPO_LIST_SORTING_OPTIONS } from "../constants";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import RepositoryListItem from "./RepositoryListItem";
import Text from "./Text";




const styles = StyleSheet.create({
  separator: {
    height: 6,
    backgroundColor: theme.colors.separator,
  },
  listHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: "gray",
    flexGrow: 1,
    flexShrink: 1,
  },
  sortingButton: {
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  sortingButtonIcon: {
    padding: 0,
    margin: 0,
    width: 25,
  },
  sortingButtonText: {
    color: theme.colors.accent1,
    paddingLeft: -5,
  },
});

const ItemSeparator = () =>
    <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  currentSorting,
  setCurrentSorting,
}) => {
  const history = useHistory();

  const [sortingMenuVisible, setSortingMenuVisible] = useState(false);
  const openSortingMenu = () => setSortingMenuVisible(true);
  const closeSortingMenu = () => setSortingMenuVisible(false);

  const handleSortSelection = (sortingOption) => {
    closeSortingMenu();
    setCurrentSorting(sortingOption);
  };

  const handleRepoItemPress = (repoId) => {
    history.push(`/repoDetails/${repoId}`);
  };

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={
        <View style={styles.listHeaderContainer}>
          <Text style={styles.searchBar}>Search bar</Text>
          <Menu
            visible={sortingMenuVisible}
            onDismiss={closeSortingMenu}
            theme={{animation: {scale: 0.1}}}
            anchor={
              <Pressable
                onPress={openSortingMenu}
                style={styles.sortingButton}>
                <IconButton
                  style={styles.sortingButtonIcon}
                  icon={currentSorting.buttonIcon}
                  color={theme.colors.accent1} />
                <Text style={styles.sortingButtonText}>
                  {currentSorting.buttonLabel}
                </Text>
              </Pressable>
          }>
            {REPO_LIST_SORTING_OPTIONS.map(sOpt =>
              <Menu.Item key={sOpt.menuLabel}
                disabled={sOpt.menuLabel === currentSorting.menuLabel}
                onPress={() => {handleSortSelection(sOpt);}}
                title={sOpt.menuLabel} />
            )}
          </Menu>
        </View>
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleRepoItemPress(item.id)}>
          <RepositoryListItem
            item={item}
            showDetailViewButtons={false} />
        </Pressable>
      )} />
  );
};


const RepositoryList = ({
  currentSorting,
  setCurrentSorting,
}) => {
  const sorting = currentSorting
    ? currentSorting
    : REPO_LIST_SORTING_OPTIONS[0];

  const { repositories } = useRepositories(
    sorting.order,
    sorting.direction,
  );

  const container =
    <RepositoryListContainer
      repositories={repositories}
      currentSorting={currentSorting}
      setCurrentSorting={setCurrentSorting} />;

  return container;
};

export default RepositoryList;
