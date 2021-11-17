import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Search from "../screens/Search";
import infoDoenca from "../screens/InfoDoenca";
import MainTab from "../stacks/MainTab";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="MainTab"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="infoDoenca" component={infoDoenca} />
  </Stack.Navigator>
);
