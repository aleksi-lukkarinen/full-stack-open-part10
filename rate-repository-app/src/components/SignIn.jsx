import { Formik } from "formik";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";



const styles = StyleSheet.create({
  container: {
    margin: 10,
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

const initialState = {
  username: "",
  password: "",
};

const USERNAME_MIN_LENGTH = 2;
const PASSWORD_MIN_LENGTH = 8;

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("The username is required.")
    .min(USERNAME_MIN_LENGTH,
      "The password has to be at least " +
      `${USERNAME_MIN_LENGTH} characters long.`),
  password: yup
    .string()
    .required("The password is required.")
    .min(PASSWORD_MIN_LENGTH,
      "The password has to be at least " +
      `${PASSWORD_MIN_LENGTH} characters long.`),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const {username, password} = values;

    try {
      const {data} = await signIn(username, password);
      console.log(data);
    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>

      {({ handleSubmit }) => (
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

        <Pressable onPress={handleSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    )}
    </Formik>
  );
};

export default SignIn;
