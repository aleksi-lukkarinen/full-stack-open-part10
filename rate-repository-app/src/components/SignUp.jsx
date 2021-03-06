import React from "react";
import { View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import * as C from "../constants";
import useSignIn from "../hooks/useSignIn";
import useCreateUser from "../hooks/useCreateUser";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import PasswordConfirmationField from "./PasswordConfirmationField";
import SubmitButton from "./SubmitButton";



const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const initialState = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const MSG_ERR_USERNAME_LENGTH =
  `Username must have ${C.USERNAME_MIN_LENGTH}-${C.USERNAME_MAX_LENGTH} characters.`;
const MSG_ERR_PASSWORD_LENGTH =
  `Password must have ${C.PASSWORD_MIN_LENGTH}-${C.PASSWORD_MAX_LENGTH} characters.`;

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required.")
    .min(C.USERNAME_MIN_LENGTH, MSG_ERR_USERNAME_LENGTH)
    .max(C.USERNAME_MAX_LENGTH, MSG_ERR_USERNAME_LENGTH),
  password: yup
    .string()
    .required("Password is required.")
    .min(C.PASSWORD_MIN_LENGTH, MSG_ERR_PASSWORD_LENGTH)
    .max(C.PASSWORD_MAX_LENGTH, MSG_ERR_PASSWORD_LENGTH),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "The passwords do not match.")
    .required("Password confirmation is required.")
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>

      {({ handleSubmit }) => (
        <View style={styles.container}>
          <UsernameField />
          <PasswordField />
          <PasswordConfirmationField />
          <SubmitButton
            label="Sign Up"
            onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};


const SignUp = () => {
  const history = useHistory();
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const {username, password} = values;

    try {
      await createUser(username, password);
      await signIn(username, password);

      history.push(C.PATH_ROOT);
    }
    catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;

