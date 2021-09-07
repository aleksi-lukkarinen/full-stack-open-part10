import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
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

export const SignInContainer = ({ onSubmit }) => {
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
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="username"
            textContentType="username"
            placeholder="Username"
            testID="UsernameField" />

          <FormikTextInput
            name="password"
            style={styles.textField}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="password"
            textContentType="password"
            placeholder="Password"
            testID="PasswordField" />

          <Pressable
            onPress={handleSubmit}
            testID="SubmitButton">

            <Text style={styles.button}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
  // returnKeyType="next" onSubmitEditing={toPasswordField}
  // returnKeyType="send" onSubmitEditing={handleSubmit}
};


const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const {username, password} = values;

    try {
      await signIn(username, password);
      history.push("/");
    }
    catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;

