import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import colors from "./app/config/colors.js";

import HomeScreen from "./app/screens/HomeScreen.js";
import CoffeDetails from "./app/screens/CoffeDetails.js";

export default function App() {
  return (
    <View style={{ backgroundColor: colors.dark, flex: 1 }}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
