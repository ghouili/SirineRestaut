import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Menu, Order } from "../screens";

const Stack = createStackNavigator();

const OrderNav = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Orders" component={Order} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

export default OrderNav;
