import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SearchUserImage,
  SearchTextName,
  SearchTextCPF
} from "./styles";

import SignInput from "../../components/SignInput";

import userPerson from "../../assets/person.svg";

export default () => {
  const navigation = useNavigation();

  const [searchlField, setSearchField] = useState("");

  const handleSignClick = () => {};

  return (
    <Container>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: userPerson
        }}
      />
      <SearchTextName>Nome Completo</SearchTextName>
      <SearchTextCPF>123.456.789-10</SearchTextCPF>

      <InputArea>
        <SignInput
          placeholder="Pesquisar"
          value={searchlField}
          onChangeText={(t) => setSearchField(t)}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>PESQUISAR</CustomButtonText>
        </CustomButton>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText></CustomButtonText>
        </CustomButton>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>PESQUISAR</CustomButtonText>
        </CustomButton>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>PESQUISAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
