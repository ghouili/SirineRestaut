import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register } from "../screens";
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

const MainStack = () => {
  let auth = true;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {auth ? (
        <Stack.Screen name="Main" component={BottomTab} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
