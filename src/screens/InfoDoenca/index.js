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

import results from "../../result";

export default ({ route }) => {
  const navigation = useNavigation();

  const [searchlField, setSearchField] = useState("");
  let nome;

  const handleSignClick = () => {
    nome = results.filter((item) => item.id.indexOf(route.params.paramKey));
  };

  return (
    <Container>
      <SearchTextName>Nome:{nome}</SearchTextName>
      <SearchTextCPF>123.456.789-10</SearchTextCPF>

      <InputArea>
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
