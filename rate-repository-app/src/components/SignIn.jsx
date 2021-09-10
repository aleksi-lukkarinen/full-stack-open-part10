import React from "react";
import { View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import * as C from "../constants";
import useSignIn from "../hooks/useSignIn";
import Text from "./Text";
import ViewLink from "./ViewLink";
import DotSeparator from "./DotSeparator";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";



export const SignInContainer = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>

        {({ handleSubmit }) => (
          <View style={styles.container}>
            <UsernameField />
            <PasswordField />
            <SubmitButton
              label="Sign In"
              onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <View>
        <DotSeparator style={styles.signUpPromptSeparator} />
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  signUpPromptSeparator: {
    marginTop: 40,
  },
  signUpPrompt: {
    marginTop: 20,
    textAlign: "center",
  },
});
