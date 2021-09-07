import React from "react";
import { Text, View, StyleSheet } from "react-native";

import * as df from "date-fns";

import theme from "../theme";



const DATE_FORMAT = "MMMM d., yyyy";

const styles = StyleSheet.create({
  masterContainer: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    flexShrink: 1,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderWidth: 3,
    borderColor: theme.colors.accent1,
    borderRadius: 25,
    justifyContent: "center",
  },
  ratingText: {
    textAlign: "center",
    color: theme.colors.accent1,
    fontSize: theme.fontSizes.heading1,
    fontWeight: theme.fontWeights.bold,
    margin: 0,
  },
  username: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: theme.fontWeights.bold,
  },
  createdAt: {
    marginTop: 5,
    color: theme.colors.accent2,
  },
  reviewText: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  const creationDate = df.parseJSON(review.createdAt);
  const formattedCreationDate =
            df.format(creationDate, DATE_FORMAT);

  return (
    <View style={styles.masterContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.createdAt}>{formattedCreationDate}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
