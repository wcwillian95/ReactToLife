import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  InputContainerRight,
  InputContainerLeft,
  TextName,
  BackArrowButton,
  LogoArea,
  InfoViewArea,
  InfoViewText
} from "./styles";

import results from "../../results2";
import { ReactComponent as Logo } from "../../assets/logoLife.svg";
import { ReactComponent as BackArrow } from "../../assets/back.svg";

export default ({ route }) => {
  const navigation = useNavigation();

  const idDoenca = route.params.paramKey;

  var textoInfo = "";

  const handleBackButton = () => {
    navigation.goBack();
    textoInfo = "";
  };
  const handleClickPrev = () => {
    textoInfo = results[idDoenca - 1].prevencao;

    console.log(results[idDoenca - 1].prevencao);
  };
  const handleClickSint = () => {
    textoInfo = results[idDoenca - 1].sintoma;
  };
  const handleClickSobre = () => {
    textoInfo = results[idDoenca - 1].sobre;
  };
  const handleClickTrat = () => {
    textoInfo = results[idDoenca - 1].tratamento;
  };

  return (
    <Container>
      <TextName>{results[idDoenca - 1].nome}</TextName>
      <InputArea>
        <InputContainerRight>
          <CustomButton onPress={handleClickPrev}>
            <CustomButtonText>Prevençoes</CustomButtonText>
          </CustomButton>
          <CustomButton onPress={handleClickSint}>
            <CustomButtonText>Sintomas</CustomButtonText>
          </CustomButton>
        </InputContainerRight>
        <InputContainerLeft>
          <CustomButton onPress={handleClickSobre}>
            <CustomButtonText>Sobre</CustomButtonText>
          </CustomButton>
          <CustomButton onPress={handleClickTrat}>
            <CustomButtonText>Tratamentos</CustomButtonText>
          </CustomButton>
        </InputContainerLeft>
      </InputArea>

      <InfoViewArea>
        <InfoViewText>{textoInfo}teste</InfoViewText>
      </InfoViewArea>

      <LogoArea>
        <Logo />
      </LogoArea>

      <BackArrowButton onPress={handleBackButton}>
        <BackArrow />
      </BackArrowButton>
    </Container>
  );
};
