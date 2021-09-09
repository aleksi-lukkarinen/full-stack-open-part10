import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useHistory } from "react-router-native";
import { Menu, IconButton, Searchbar } from "react-native-paper";

import * as C from "../constants";
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
    alignItems: "center",
    padding: 10,
  },
  searchBar: {
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 5,
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
  directSearchExpression,
  setSearchExpression,
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
    history.push(`${C.PATH_REPO_DETAILS}/${repoId}`);
  };

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={
        <View style={styles.listHeaderContainer}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            value={directSearchExpression}
            onChangeText={setSearchExpression} />
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
            {C.REPO_LIST_SORTING_OPTIONS.map(sOpt =>
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
  directSearchExpression,
  searchExpression,
  setSearchExpression,
  currentSorting,
  setCurrentSorting,
}) => {
  const sorting = currentSorting
    ? currentSorting
    : C.REPO_LIST_SORTING_OPTIONS[0];

  const { repositories } = useRepositories(
    searchExpression,
    sorting.order,
    sorting.direction,
  );

  const container =
    <RepositoryListContainer
      repositories={repositories}
      directSearchExpression={directSearchExpression}
      searchExpression={searchExpression}
      setSearchExpression={setSearchExpression}
      currentSorting={currentSorting}
      setCurrentSorting={setCurrentSorting} />;

  return container;
};

export default RepositoryList;
