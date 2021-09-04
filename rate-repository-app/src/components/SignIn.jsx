import { Formik } from "formik";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";



const initialState = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textField: {
    marginBottom: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.colors.separator,
    borderRadius: 3,
  },
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

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialState}>
      <View style={styles.container}>
        <FormikTextInput
          name="username"
          style={styles.textField}
          placeholder="Username" />

        <FormikTextInput
          name="password"
          style={styles.textField}
          secureTextEntry
          placeholder="Password" />

        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    </Formik>
  );
};

export default SignIn;
