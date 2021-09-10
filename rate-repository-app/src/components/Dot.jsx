import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";



const Dot = ({dotSize = 6, style, ...props}) => {
  const styles = StyleSheet.create({
    separatorDot: {
      backgroundColor: theme.colors.accent2,
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2.0,
      marginHorizontal: 2,
    },
  });

  const combinedStyle = [
    styles.separatorDot,
    style
  ];

  return <View style={combinedStyle} {...props} />;
};

export default Dot;
