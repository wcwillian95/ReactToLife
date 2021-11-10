import React, { useEffect } from "react";
import { Text, Image } from "react-native";
import { Container, LoadingIcon, TextLogo } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import { ReactComponent as ReactLogo } from "../../assets/logoLife.svg";

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        // validar o token
      } else {
        // navegar para tela SignIn
        navigation.navigate("SignIn");
      }
    };
    setTimeout(() => {
      checkToken();
    }, 3000);
  }, []);

  return (
    <Container>
      <ReactLogo width="50" height="50" fill="#268596" />

      <TextLogo>React To Life</TextLogo>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
