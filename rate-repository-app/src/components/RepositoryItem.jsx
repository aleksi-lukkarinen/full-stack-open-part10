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
          <GitRepoName
            style={styles.name}
            testID="GitRepoName">
              {item.fullName}
          </GitRepoName>

          <GitRepoDescription
            style={styles.description}
            testID="GitRepoDescription">
              {item.description}
          </GitRepoDescription>

          <View style={styles.languageRow}>
            <GitRepoLanguage
              testID="GitRepoLanguage">
                {item.language}
            </GitRepoLanguage>
          </View>
        </View>
      </View>
      <View style={styles.statRow}>
        <GitRepoStat
          name="Stars"
          value={item.stargazersCount}
          testID="GitRepoStatStars"/>

        <GitRepoStat
          name="Forks"
          value={item.forksCount}
          testID="GitRepoStatForks" />

        <GitRepoStat
          name="Reviews"
          value={item.reviewCount}
          testID="GitRepoStatReviews" />

        <GitRepoStat
          name="Rating"
          value={item.ratingAverage}
          testID="GitRepoStatRating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
