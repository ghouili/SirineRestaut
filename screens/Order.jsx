import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-paper";

import { WindowHeight, WindowWidth } from "../Variables/ult";
import { OrderCard } from "../components";

let orders = [
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
  {
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    State: "Delivered - 24-03-2024 11:25",
  },
];

const Order = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        {orders.map((item, idx) => (
          <OrderCard key={idx} data={item} />
        ))}
      </View>
      <FAB
        icon="plus"
        color="white"
        style={styles.fab}
        onPress={() => navigation.navigate("Menu")}
      />
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7F8",
    position: "relative",
    // borderStyle: "solid",
    // borderWidth: 20,
    // borderColor: "#000"
  },
  logo: {
    padding: 10,
    width: WindowWidth,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    // borderStyle: "solid",
    // borderColor: "red",
    // borderWidth: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: WindowHeight,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#0C9800',
  },
});
