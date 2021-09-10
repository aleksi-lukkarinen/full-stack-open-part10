import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../theme";



const SubmitButton = ({label="Submit", onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      testID="SubmitButton">

      <Text style={styles.button}>{label}</Text>
    </Pressable>
  );
};

export default SubmitButton;


const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    textAlign: "center",
    backgroundColor: theme.colors.accent1,
    color: theme.colors.foregroundInverted,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 5,
  }
});
