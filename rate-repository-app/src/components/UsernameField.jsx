import React from "react";
import FormikTextInput from "./FormikTextInput";



const UsernameField = ({name="username", ...props}) => {
  return (
    <FormikTextInput
      name={name}
      autoFocus={true}
      autoCapitalize="none"
      autoCorrect={false}
      autoCompleteType="username"
      textContentType="username"
      placeholder="Username"
      testID="UsernameField"
      {...props} />
  );
};

export default UsernameField;
