import React from "react";
import { useHistory } from "react-router";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import theme from "../theme";



const ViewLink = ({to, children, ...props}) => {
  const history = useHistory();

  const handlePress = () => {
    history.push(to);
  };

  const textProps = {
    onPress: handlePress,
    style: styles.linkText,
    ...props
  };

  return (
    <Text {...textProps}>
      {children}
    </Text>
  );
};

export default ViewLink;


const styles = StyleSheet.create({
  linkText: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
    color: theme.colors.accent1,
    textDecorationLine: "underline",
  },
});
