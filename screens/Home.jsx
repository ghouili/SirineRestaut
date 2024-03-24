import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import { WindowHeight, WindowWidth } from "../Variables/ult";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.pic_01}
          source={require("../assets/images/sea_food_salad.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
        <View style={styles.right_side}>
          <Image
            style={styles.pic_02}
            source={require("../assets/images/grilled_fish.png")}
          />
          <Image
            style={styles.pic_02}
            source={require("../assets/images/sushi.png")}
          />
        </View>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Reservation Details</Text>

        <View style={styles.group}>
          <Text style={styles.subTitle}>Number of guests</Text>

          <View style={styles.input}>
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
              <View key={index} style={styles.userNumber}>
                <FontAwesome
                  name="user-o"
                  size={38}
                  style={
                    item === 3
                      ? { fontWeight: 100, color: "#0C9800" }
                      : { fontWeight: 100 }
                  }
                />
                <Text
                  style={[
                    styles.number,
                    item === 3 ? { color: "#0C9800" } : null,
                  ]}
                >
                  {item + 1}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* time */}
        <View style={styles.group}>
          <Text style={styles.subTitle}>Choose Time</Text>
          <ScrollView>
            <View style={styles.input}>
              {["11:30", "12:00", "12:30", "13:00", "13:30", "14:00"].map(
                (item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.time,
                      item === "12:00"
                        ? { backgroundColor: "#0C9800", borderColor: "#0C9800" }
                        : null,
                    ]}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        item === "12:00" ? { color: "white" } : null,
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                )
              )}
            </View>
          </ScrollView>
        </View>

        {/* duration */}
        <View style={styles.group}>
          <Text style={styles.subTitle}>Choose Time</Text>

          <View style={styles.input}>
            {[
              "1 hours",
              "1.5 hours",
              "2 hours",
              "2.5 hours",
              "3 hours",
              "3.5 hours",
            ].map((item, index) => (
              <View
                key={index}
                style={[
                  styles.time,
                  item === "1.5 hours"
                    ? { backgroundColor: "#0C9800", borderColor: "#0C9800" }
                    : null,
                ]}
              >
                <Text
                  style={[
                    styles.timeText,
                    item === "1.5 hours" ? { color: "white" } : null,
                  ]}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <LinearGradient
              // Button Linear Gradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#1FC1B3", "#0D9A08"]}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Show Table</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>Home</Text> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7F8",
    position: "relative",
  },
  logo_container: {
    // position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: WindowWidth,
    height: WindowHeight * 0.25,
  },
  pic_01: {
    width: WindowWidth * 0.2,
    height: WindowHeight * 0.2,
  },
  logo: {
    width: WindowWidth * 0.2,
    height: WindowHeight * 0.2,
  },
  right_side: {
    display: "flex",
    height: "100%",
    paddingVertical: "8%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pic_02: {
    // marginTop: -WindowHeight * 0.1,
    width: WindowWidth * 0.2,
    height: WindowHeight * 0.07,
  },
  form: {
    backgroundColor: 'white',
    padding: 15,
    width: "100%",
    height: WindowHeight * 0.65,
    borderStyle: "solid",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderWidth: 2,
    borderColor: "#DEDDDD",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  input: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#191919",
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 18,
    color: "#191919",
  },
  userNumber: {
    position: "relative",
    // borderColor: 'red',
    // borderWidth: 1,
  },
  number: {
    position: "absolute",
    left: "40%",
    bottom: 2,
    fontSize: 12,
    color: "#191919",
  },
  time: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#000",
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#191919",
  },
  btnContainer: {
    height: WindowHeight * 0.225,
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
