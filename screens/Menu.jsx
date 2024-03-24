import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OrderCard } from "../components";
import { WindowHeight, WindowWidth } from "../Variables/ult";
import { Avatar, Button, Card, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

let MENU_ITEMS = [
  {
    id: "00",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
  {
    id: "09",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
  {
    id: "07",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
  {
    id: "01",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
  {
    id: "02",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
  {
    id: "03",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
  {
    id: "04",
    picture: "../assets/images/sushi.png",
    title: "SeaFood Plate",
    desciption: "Delivered - 24-03-2024 11:25",
    price: "23 SAR",
  },
];

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const numColumns = 2; // Number of items per row (2 in this case)

const renderItem = ({ item }) => (
  <Card style={styles.containerItem}>
    <Card.Title
      title={item.title}
    />
    <Card.Content>
      <Text variant="bodyMedium">{item.desciption}</Text>
    </Card.Content>
    <Card.Cover source={require("../assets/images/sushi.png")} style={styles.pic_02} />
    <Card.Actions>
      <Button>Order</Button>
    </Card.Actions>
  </Card>
);

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.rowWrapper} // Optional: style the rows
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  containerItem: {
    width: WindowWidth * 0.455,
    marginTop: 10
  },
  container: {
    flex: 1,
    padding: 10,
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
    backgroundColor: "#0C9800",
  },
  menuItem: {
    flex: 1, // Make each item fill half the width
    padding: 10,
    margin: 5,
    alignItems: "center", // Center icon and text vertically
    backgroundColor: "#eee", // Optional: background color for menu items
  },
  menuIcon: {
    marginBottom: 5, // Optional: spacing between icon and text
  },
  menuText: {
    fontSize: 16,
  },
  rowWrapper: {
    flexWrap: "wrap", // Wrap items to create a grid
    justifyContent: "space-between", // Distribute items evenly
  },
  pic_02: {
    width: WindowWidth * 0.4,
    height: WindowWidth * 0.3,
    resizeMode: 'contain'
  },
});
