import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
  flex-direction: row;
  justify-content: center;
  flex: 1;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #268596;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const TextName = styled.Text`
  margin-top: 20px;
  font-size: 26px;
  font-weight: bold;
  color: #268596;
`;
export const SearchTextCPF = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;

export const InputContainerLeft = styled.View`
  width: 65%;
`;
export const InputContainerRight = styled.View`
  width: 65%;
`;

export const LogoArea = styled.View`
  width: 34px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const BackArrowButton = styled.TouchableOpacity`
  width: 60px;
  height: 50px;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 0px;
  z-index: 9;
`;

export const InfoViewArea = styled.View`
  flex: 4;
  background-color: rgba(255, 255, 255, 0.5);
  width: 95%;
  margin: 10px;
  top: -10px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const InfoViewScroll = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export let InfoViewText = styled.Text`
  font-size: 16px;
  margin: 10px;
`;
