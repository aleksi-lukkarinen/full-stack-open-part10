import React, { Component, useState } from "react";
import { FlatList, View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { useHistory } from "react-router-native";
import { Menu, IconButton, Searchbar } from "react-native-paper";

import * as C from "../constants";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import RepositoryListItem from "./RepositoryListItem";
import Text from "./Text";



export class RepositoryListContainer extends Component {
  openSortingMenu = () => {
    this.props.setSortingMenuVisible(true);
  };

  closeSortingMenu = () => {
    this.props.setSortingMenuVisible(false);
  };

  handleSortSelection = (sortingOption) => {
    this.closeSortingMenu();
    this.props.setCurrentSorting(sortingOption);
  };

  renderHeader = () => {
    const P = this.props;

    return (
      <View style={styles.listHeaderContainer}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search"
          value={P.directSearchExpression}
          onChangeText={P.setSearchExpression} />
        <Menu
          visible={P.sortingMenuVisible}
          onDismiss={() => this.closeSortingMenu()}
          theme={{animation: {scale: 0.1}}}
          anchor={
            <Pressable
              onPress={() => this.openSortingMenu()}
              style={styles.sortingButton}>
              <IconButton
                style={styles.sortingButtonIcon}
                icon={P.currentSorting.buttonIcon}
                color={theme.colors.accent1} />
              <Text style={styles.sortingButtonText}>
                {P.currentSorting.buttonLabel}
              </Text>
            </Pressable>
        }>
          {C.REPO_LIST_SORTING_OPTIONS.map(sOpt =>
            <Menu.Item key={sOpt.menuLabel}
              disabled={sOpt.menuLabel === P.currentSorting.menuLabel}
              onPress={() => this.handleSortSelection(sOpt)}
              title={sOpt.menuLabel} />
          )}
        </Menu>
      </View>
    );
  }

  listEmptyComponent = () => {
    return (
      <View>
        <Text style={styles.loadingText}>
          {this.props.loadingRepositories
            ? "Loading repositories..."
            : "No repositories found."}
        </Text>

        {!this.props.loadingRepositories ? <></>
          : <ActivityIndicator
                size={50}
                animating={true}
                color={theme.colors.accent1} /> }
      </View>
    );
  }

  render () {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={this.listEmptyComponent}
        renderItem={({ item }) => (
          <Pressable onPress={() => this.props.handleRepoListItemPress(item.id)}>
            <RepositoryListItem
              item={item}
              showDetailViewButtons={false} />
          </Pressable>
        )} />
    );
  }
}


const RepositoryList = ({
  directSearchExpression,
  searchExpression,
  setSearchExpression,
  currentSorting,
  setCurrentSorting,
}) => {
  const history = useHistory();

  const [sortingMenuVisible, setSortingMenuVisible] = useState(false);

  const handleRepoListItemPress = (repoId) => {
    history.push(`${C.PATH_REPO_DETAILS}/${repoId}`);
  };

  const sorting = currentSorting
    ? currentSorting
    : C.REPO_LIST_SORTING_OPTIONS[0];

  const {
    repositories,
    loading: loadingRepositories
  } = useRepositories(
    searchExpression,
    sorting.order,
    sorting.direction,
  );

  const container =
    <RepositoryListContainer
      repositories={repositories}
      loadingRepositories={loadingRepositories}
      handleRepoListItemPress={handleRepoListItemPress}
      directSearchExpression={directSearchExpression}
      searchExpression={searchExpression}
      setSearchExpression={setSearchExpression}
      sortingMenuVisible={sortingMenuVisible}
      setSortingMenuVisible={setSortingMenuVisible}
      currentSorting={currentSorting}
      setCurrentSorting={setCurrentSorting} />;

  return container;
};

export default RepositoryList;


const ItemSeparator = () =>
    <View style={styles.separator} />;

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
  loadingText: {
    marginTop: 60,
    marginBottom: 30,
    textAlign: "center",
    fontSize: theme.fontSizes.heading1,
    color: theme.colors.accent2,
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
