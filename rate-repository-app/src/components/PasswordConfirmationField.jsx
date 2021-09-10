import React from "react";
import FormikTextInput from "./FormikTextInput";



const PasswordConfirmationField = ({
  name="passwordConfirmation",
  ...props
}) => {
  return (
    <FormikTextInput
      name={name}
      secureTextEntry={true}
      autoCapitalize="none"
      autoCorrect={false}
      autoCompleteType="password"
      textContentType="password"
      placeholder="Password confirmation"
      testID="PasswordConfirmationField"
      {...props} />
  );
};

export default PasswordConfirmationField;
