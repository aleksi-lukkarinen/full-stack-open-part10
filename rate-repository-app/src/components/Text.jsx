import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";



const styles = StyleSheet.create({
  defaults: {
    color: theme.colors.foreground,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorInverted: {
    color: theme.colors.foregroundInverted,
  },
  colorAccent1: {
    color: theme.colors.accent1,
  },
  colorAccent2: {
    color: theme.colors.accent2,
  },
  fontSizeHeading1: {
    fontSize: theme.fontSizes.heading1,
  },
  fontSizeHeading2: {
    fontSize: theme.fontSizes.heading2,
  },
  fontSizeSmall: {
    fontSize: theme.fontSizes.small,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, size, weight, style, ...props }) => {
  const textStyle = [
    styles.defaults,
    color === "inverted" && styles.colorInverted,
    color === "accent1" && styles.colorAccent1,
    color === "accent2" && styles.colorAccent2,
    size === "heading1" && styles.fontSizeHeading1,
    size === "heading2" && styles.fontSizeHeading2,
    size === "small" && styles.fontSizeSmall,
    weight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
