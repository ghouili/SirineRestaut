import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { OrderCard } from "../components";
import { WindowHeight, WindowWidth } from "../Variables/ult";
import {
  Avatar,
  Button,
  Card,
  Dialog,
  FAB,
  TextInput,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheet } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

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

const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
    color="#EFCC43"
    size={45}
    icon="star-outline"
  />
);

const renderItem = ({ item }) => (
  <Card style={styles.containerItem}>
    <Card.Title title={item.title} right={LeftContent} />
    <Card.Content>
      <Text variant="bodyMedium">{item.desciption}</Text>
    </Card.Content>
    <Card.Cover
      source={require("../assets/images/sushi.png")}
      style={styles.pic_02}
    />
    <Card.Actions>
      <Button style={{ borderRadius: 10 }}>
        <Text style={styles.btnc}>Order</Text>
      </Button>
    </Card.Actions>
  </Card>
);

const Menu = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [name, setName] = React.useState("Mr Ahmed Malki");
  const [ccn, setCcn] = React.useState("5953-5756-1223-5658");
  const [dateEx, setDateEx] = React.useState("24/27");
  const [ccv, setCcv] = React.useState("***");

  const toggleDialog = () => setVisibleDialog(!visibleDialog);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.rowWrapper} // Optional: style the rows
      />
      <FAB
        icon="check"
        color="white"
        style={styles.fab}
        onPress={() => {
          setIsVisible(!isVisible);
          console.log(isVisible);
        }}
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={styles.bottomSheet}>
          <TextInput
            mode="outlined"
            label="Name of Credit Card"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            mode="outlined"
            label="Credit Card Number"
            value={ccn}
            onChangeText={(text) => setCcn(text)}
          />
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Experation Date"
              value={dateEx}
              onChangeText={(text) => setDateEx(text)}
            />
            <TextInput
              style={styles.input}
              mode="outlined"
              label="CCV"
              value={ccv}
              onChangeText={(text) => setCcv(text)}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(!isVisible);
                setVisibleDialog(!visibleDialog);
              }}
            >
              <LinearGradient
                // Button Linear Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#1FC1B3", "#0D9A08"]}
                style={styles.btn}
              >
                <Text style={styles.btnText}>Pay & Complete</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <Dialog visible={visibleDialog} onDismiss={toggleDialog}>
        {/* <Dialog.Title>Alert</Dialog.Title> */}
        <Dialog.Content>
          <Text variant="bodyMedium">Payed Successfully</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => navigation.navigate("Orders")}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  containerItem: {
    width: WindowWidth * 0.455,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F3F7F8",
    position: "relative",
  },
  logo: {
    padding: 10,
    width: WindowWidth,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
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
    resizeMode: "contain",
  },
  btnc: {
    color: "#0C9800",
  },
  bottomSheet: {
    width: "100%",
    height: WindowHeight * 0.4,
    backgroundColor: "white",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 15,
    borderColor: "gray",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  inputs: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // borderWidth: 1,
  },
  input: {
    width: "48.5%",
  },
  btnContainer: {
    // height: WindowHeight * 0.225,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "#000",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});
