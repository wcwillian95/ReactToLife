import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SearchTextName
} from "./styles";

import SignInput from "../../components/SignInput";

import { ReactComponent as AccountIcon } from "../../assets/account.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

export default () => {
  const navigation = useNavigation();

  const [personlField, setPersonField] = useState("");

  const handleSignClick = () => {};

  return (
    <Container>
      <AccountIcon
        style={{ marginBottom: 40 }}
        width="100"
        height="100"
        fill="#268596"
      />

      <SearchTextName value={personlField.nome}>Nome Completo</SearchTextName>
      <SearchTextName value={personlField.cpf}>123.456.789-10</SearchTextName>
      <SearchTextName value={personlField.email}>
        email@email.com
      </SearchTextName>

      <InputArea>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Alterar Dados</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
