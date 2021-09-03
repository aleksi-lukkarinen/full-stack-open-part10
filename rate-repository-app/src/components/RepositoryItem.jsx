import React from "react";
import { View, StyleSheet } from "react-native";

import GitAvatar from "./GitAvatar";
import GitRepoDescription from "./GitRepoDescription";
import GitRepoLanguage from "./GitRepoLanguage";
import GitRepoName from "./GitRepoName";
import GitRepoStat from "./GitRepoStat";



const styles = StyleSheet.create({
  masterContainer: {
    padding: 10,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  primaryInfoContainer: {
    margin: 0,
    paddingLeft: 10,
  },
  name: {
    marginTop: -3,
  },
  description: {
    marginTop: 6,
  },
  languageRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.masterContainer}>
      <View style={styles.row}>
        <GitAvatar uri={item.ownerAvatarUrl} />
        <View style={styles.primaryInfoContainer}>
          <GitRepoName style={styles.name}>{item.fullName}</GitRepoName>
          <GitRepoDescription style={styles.description}>{item.description}</GitRepoDescription>
          <View style={styles.languageRow}>
            <GitRepoLanguage>{item.language}</GitRepoLanguage>
          </View>
        </View>
      </View>
      <View style={styles.statRow}>
        <GitRepoStat name="Stars" value={item.stargazersCount} />
        <GitRepoStat name="Forks" value={item.forksCount} />
        <GitRepoStat name="Reviews" value={item.reviewCount} />
        <GitRepoStat name="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
