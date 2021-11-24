import React from "react";
import { useState, useEffect } from "react";
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
  InfoViewText,
  InfoViewScroll
} from "./styles";

import results from "../../results2";
import { ReactComponent as Logo } from "../../assets/logoLife.svg";
import { ReactComponent as BackArrow } from "../../assets/back.svg";

export default ({ route }) => {
  const navigation = useNavigation();

  const idDoenca = route.params.paramKey;

  let [infoText, SetInfoText] = useState(
    "Sobre:\n" + results[idDoenca - 1].sobre
  );

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleClickPrev = () => {
    SetInfoText("Prevenção:\n" + results[idDoenca - 1].prevencao);
  };

  const handleClickSint = () => {
    SetInfoText("Sintomas:\n" + results[idDoenca - 1].sintoma);
  };

  const handleClickSobre = () => {
    SetInfoText("Sobre:\n" + results[idDoenca - 1].sobre);
  };

  const handleClickTrat = () => {
    SetInfoText("Tratamentos:\n" + results[idDoenca - 1].tratamento);
  };

  return (
    <Container>
      <TextName>{results[idDoenca - 1].nome}</TextName>
      <InputArea>
        <InputContainerRight>
          <CustomButton onPress={handleClickPrev}>
            <CustomButtonText>Prevenções</CustomButtonText>
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
        <InfoViewScroll>
          <InfoViewText>{infoText}</InfoViewText>
        </InfoViewScroll>
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
