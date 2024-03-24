import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Favorites, Home, Menu, Order, Paiement, Profile } from "../screens";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Menu}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Paiement"
        component={Paiement}
        options={{
          tabBarLabel: "Paiement",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="payment" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-edit"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
