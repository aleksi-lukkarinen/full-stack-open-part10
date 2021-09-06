import React from "react";
import { View, StyleSheet } from "react-native";

import { numberToKiloString } from "../utils/presentation";
import Text from "./Text";



const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    flexDirection: "column",

  },
  value: {
    textAlign: "center",
  },
  name: {
    textAlign: "center",
    marginTop: 4,
  },
});

const GitRepoStat = ({ name, value, testID }) => {
  const clearedName = name.trim();
  const clearedValue = numberToKiloString(value);

  return (
    <View style={styles.container}>
      <Text
        weight="bold"
        style={styles.value}
        testID={`${testID}Value`}>
          {clearedValue}
      </Text>

      <Text
        color="accent2"
        style={styles.value}
        testID={`${testID}Name`}>
          {clearedName}
      </Text>
    </View>
  );
};

export default GitRepoStat;
