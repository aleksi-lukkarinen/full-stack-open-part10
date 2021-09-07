import { Linking } from "expo";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

import theme from "../theme";
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
  detailViewButtonRow: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    flexGrow: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.accent1,
    color: theme.colors.foregroundInverted,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 5,
  },
  deleteButton: {
    flexGrow: 0,
    backgroundColor: theme.colors.warning,
  },
  buttonText: {
    textAlign: "center",
    color: theme.colors.foregroundInverted,
    fontWeight: theme.fontWeights.bold,
  },
  buttonSeparator: {
    width: 10,
  }
});

const RepositoryItem = ({ item, showDetailViewButtons }) => {
/*
  const deleteButtonStyle = [
    styles.button,
    styles.deleteButton,
  ];
*/
  const handleOpeningInGitHub = (url) => {
    try {
      Linking.openURL(url);
    }
    catch (e) {
      console.log(`Opening URL "${url}" failed: ${e}`);
    }
  };
/*
  const handleDeletion = () => {
    alert("Deletion");
  };
*/
  if (typeof(item) !== "object") {
    return (
      <View>
        <Text style={{textAlign: "center", marginTop: 20, fontWeight: "bold"}}>
          Missing or malformatted repository item{"\n"}
          argument of type &quot;{typeof(item)}&quot;:
        </Text>
        <Text style={{textAlign: "center", marginTop: 10}}>
          {item}
        </Text>
      </View>
    );
  }

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
      {!showDetailViewButtons ? <></> :
        <View style={styles.detailViewButtonRow}>
          <Pressable
            style={styles.button}
            onPress={() => handleOpeningInGitHub(item.url)}>

            <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
        </View>
      }
    </View>
  );
};

/*
        <View style={styles.buttonSeparator} />
        <Pressable style={deleteButtonStyle} onPress={handleDeletion}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
*/

export default RepositoryItem;
