import React from "react";
import { View, StyleSheet } from "react-native";
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

const GitRepoStat = ({ name, value }) => {
  const clearedName = name.trim();

  let clearedValue = value;
  if (typeof(value) === "number") {
    if (value > 1000) {
      const v = Math.round(Math.trunc(value) / 100) / 10;
      clearedValue = `${v}k`;
    }
  }

  return (
    <View style={styles.container}>
      <Text weight="bold" style={styles.value}>{clearedValue}</Text>
      <Text color="accent2" style={styles.name}>{clearedName}</Text>
    </View>
  );
};

export default GitRepoStat;
