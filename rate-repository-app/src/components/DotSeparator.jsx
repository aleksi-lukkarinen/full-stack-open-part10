import _ from "lodash";
import React from "react";
import { View, StyleSheet } from "react-native";
import Dot from "./Dot";



const styles = StyleSheet.create({
  dotSeparator: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

const DotSeparator = ({dotSize, numberOfDots=3, style, ...props}) => {
  const combinedStyle = [
    styles.dotSeparator,
    style
  ];

  return (
    <View style={combinedStyle} {...props}>
      {_.times(numberOfDots, (index) =>
        <Dot key={index} dotSize={dotSize} />)}
    </View>
  );
};

export default DotSeparator;
