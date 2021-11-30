import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SearchTextName,
  SearchTextCPF
} from "./styles";

import { ReactComponent as AccountIcon } from "../../assets/account.svg";

import getFirebase from "../../firebase";

import usuario from "../../user";

export default () => {
  const navigation = useNavigation();

  const handleSignClick = () => {
    const firebaseInstance = getFirebase();

    const signOut = async () => {
      try {
        if (firebaseInstance) {
          await firebaseInstance.auth().signOut();
          navigation.navigate("SignIn");
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    signOut();
  };

  return (
    <Container>
      <AccountIcon width="100" height="100" fill="#268596" />

      <SearchTextName>{usuario.nome}</SearchTextName>
      <SearchTextCPF>{usuario.email}</SearchTextCPF>

      <InputArea>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Log Out</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
