import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Card, IconButton } from "react-native-paper";
import { WindowHeight, WindowWidth } from "../Variables/ult";

const OrderCard = () => {
  return (
    <Card.Title
      title="SeaFood plate "
      subtitle="Delivred - 24/03/2024 11:56"
      style={styles.card}
      left={(props) => (
        <Image
        {...props}
          style={styles.pic_02}
          source={require("../assets/images/sushi.png")}
        />
      )}
      right={(props) => (
        <IconButton {...props} icon="arrow-right" iconColor="green" onPress={() => {}} />
      )}
    />
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius:  10,
    backgroundColor: '#ffffff'
  },
  pic_02: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
});
