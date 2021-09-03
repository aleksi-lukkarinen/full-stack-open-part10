import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";


const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    paddingBottom: 4,
    paddingHorizontal: 6,
    backgroundColor: theme.colors.accent1,
    textAlign: "center",
    borderRadius: 5,
  },
});

const GitRepoLanguage = ({ ...props }) => (
  <View style={styles.container}>
    <Text color="inverted" size="small" {...props} />
  </View>
);


export default GitRepoLanguage;
