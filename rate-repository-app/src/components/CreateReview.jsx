import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import useCreateReview from "../hooks/useCreateReview";



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
  textField: {
  },
  multiLineTextField: {
    paddingVertical: 10,
    textAlignVertical: "top",
  }
});

const initialState = {
  ownerName: "",
  repoName: "",
  rating: "",
  review: "",
};

const RATING_MIN_VALUE = 0;
const RATING_MAX_VALUE = 100;
const MSG_RATING_RANGE =
    "The has to be between " +
    `${RATING_MIN_VALUE} and ${RATING_MAX_VALUE}`;

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("The repository owner's name is required."),
  repoName: yup
    .string()
    .required("The repository name is required."),
  rating: yup
    .number()
    .required("The rating is required.")
    .min(RATING_MIN_VALUE, MSG_RATING_RANGE)
    .max(RATING_MAX_VALUE, MSG_RATING_RANGE),
  review: yup.string()
});

export const CreateReviewContainer = ({ onSubmit }) => {
  const multiLineFieldStyle = [
    styles.textField,
    styles.multiLineTextField
  ];

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>

      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="ownerName"
            style={styles.textField}
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Repository owner name" />

          <FormikTextInput
            name="repoName"
            style={styles.textField}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Repository name" />

          <FormikTextInput
            name="rating"
            style={styles.textField}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=
              {`Rating between ${RATING_MIN_VALUE} ` +
              `and ${RATING_MAX_VALUE}`} />

          <FormikTextInput
            name="review"
            multiline={true}
            numberOfLines={4}
            style={multiLineFieldStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Review" />

          <Pressable onPress={handleSubmit} >
            <Text style={styles.button}>Create Review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};


const CreateReview = () => {
  const history = useHistory();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const {ownerName, repoName, rating, review} = values;

    let ratingInt = undefined;
    try {
      ratingInt = Number.parseInt(rating);
    }
    catch (e) {
      console.log("Invalid rating: ", e, rating);
    }

    try {
      const result = await createReview(
          ownerName, repoName, ratingInt, review);

      const repoId = result.data.createReview.repository.id;
      history.push(`/repoDetails/${repoId}`);
    }
    catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;

