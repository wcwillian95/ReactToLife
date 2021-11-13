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

import SignInput from "../../components/SignInput";

import { ReactComponent as AccountIcon } from "../../assets/account.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

export default () => {
  const navigation = useNavigation();

  const [searchlField, setSearchField] = useState("");

  const handleSignClick = () => {};

  return (
    <Container>
      <AccountIcon width="100" height="100" fill="#268596" />

      <SearchTextName>Nome Completo</SearchTextName>
      <SearchTextCPF>123.456.789-10</SearchTextCPF>

      <InputArea>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Log Out</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
