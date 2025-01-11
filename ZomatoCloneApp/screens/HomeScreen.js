import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Categories from "../components/Categories";
import HomeImageArea from "../components/HomeImageArea.js";
import ItemComponent from "../components/ItemComponent.js";
import Restaurants from "../data/Restaurants.js";
import RestaurantComponents from "../components/RestaurantComponents.js";

export default function HomeScreen() {
  const data = Restaurants;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#eaeaea",
          padding: 7,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <AntDesign name="search1" size={24} color="#E52B50" />
        <TextInput
          style={{
            paddingLeft: 5,
          }}
          placeholder="Restaurant Adı - Yemek Giriniz"
        />
      </View>
      <Categories />
      <HomeImageArea />
      <ItemComponent />
      {data.map((item, index) => (
  <RestaurantComponents key={item.id || index} restaurant={item} />
))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 50,
    marginHorizontal: 10,
  },
});
