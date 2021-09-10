import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import * as C from "../constants";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import ViewLink from "./ViewLink";



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
  },
  signUpPromptContainer: {
    flexDirection: "column",
  },
  signUpPromptSeparator: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 40,
  },
  signUpPromptSeparatorDot: {
    backgroundColor: theme.colors.accent2,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
  signUpPrompt: {
    marginTop: 20,
    textAlign: "center",
  },
});

const initialState = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("The username is required."),
  password: yup
    .string()
    .required("The password is required."),
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <>
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
      <View style={styles.signUpPromptContainer}>
        <View style={styles.signUpPromptSeparator}>
          <View style={styles.signUpPromptSeparatorDot} />
          <View style={styles.signUpPromptSeparatorDot} />
          <View style={styles.signUpPromptSeparatorDot} />
        </View>
        <Text style={styles.signUpPrompt}>
          If you do not have an account yet,
          please <ViewLink to={C.PATH_SIGN_UP}>Sign Up</ViewLink>.
        </Text>
      </View>
    </>
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
      history.push(C.PATH_ROOT);
    }
    catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;

