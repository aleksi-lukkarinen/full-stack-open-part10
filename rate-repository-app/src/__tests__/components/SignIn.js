import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "../../components/SignIn";



const TEST_USERNAME = "kalle";
const TEST_PASSWORD = "password";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const component = <SignInContainer onSubmit={onSubmit} />;

      const { getByTestId } = render(component);

      fireEvent.changeText(
        getByTestId("UsernameField"), TEST_USERNAME);

      fireEvent.changeText(
        getByTestId("PasswordField"), TEST_PASSWORD);

      fireEvent.press(getByTestId("SubmitButton"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: TEST_USERNAME,
          password: TEST_PASSWORD,
        });
      });
    });
  });
});
