import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigations/MainNav";
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
