import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image } from "react-native";
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

import ReactLogo from "../../assets/logoLife.svg";
import IconPerson from "../../assets/person.svg";
import IconEmail from "../../assets/email.svg";
import IconLock from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [CPFField, setCPFField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }]
    });
  };

  return (
    <Container>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: ReactLogo
        }}
      />
      <TextLogo>React To Life</TextLogo>

      <InputArea>
        <SignInput
          IconSvg={IconPerson}
          placeholder="Nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <SignInput
          IconSvg={IconPerson}
          placeholder="CPF"
          value={CPFField}
          onChangeText={(t) => setCPFField(t)}
        />

        <SignInput
          IconSvg={IconEmail}
          placeholder="E-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={IconLock}
          placeholder="Senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
