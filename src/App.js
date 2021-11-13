import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./stacks/MainStack";

export default () => {
  console.clear();
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
