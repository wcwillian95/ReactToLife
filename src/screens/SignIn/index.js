import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import {
  Container,
  InputArea,
  TextLogo,
  CustomButton,
  CustomButtonText,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignMessageButton
} from "./styles";

import SignInput from "../../components/SignInput";
import SignInForm from "../../components/SignInForm";

import { ReactComponent as ReactLogo } from "../../assets/logoLife.svg";
import { ReactComponent as IconEmail } from "../../assets/email.svg";
import { ReactComponent as IconLock } from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = () => {
    navigation.reset({
      routes: [{ name: "MainTab" }]
    });
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }]
    });
  };

  return (
    <Container>
      <ReactLogo width="50" height="50" fill="#268596" />
      <TextLogo>React To Life</TextLogo>
      <InputArea>
        <SignInForm />
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda não possui conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
