import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";



const styles = StyleSheet.create({
  textField: {
    marginBottom: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.colors.separator,
    borderRadius: 3,
  },
  textFieldWithErrors: {
    borderColor: theme.colors.errorText,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textField,
    style,
    error && styles.textFieldWithErrors,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
