import React from "react";
import FormikTextInput from "./FormikTextInput";



const PasswordField = ({name="password", ...props}) => {
  return (
    <FormikTextInput
      name={name}
      secureTextEntry={true}
      autoCapitalize="none"
      autoCorrect={false}
      autoCompleteType="password"
      textContentType="password"
      placeholder="Password"
      testID="PasswordField"
      {...props} />
  );
};

export default PasswordField;
