import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

export default function ItemComponent() {
  const foodItems = [
    {
      id: "1",
      foodCategorieName: "Döner",
      foodImageUrl:
        "https://www.dostlar.eu/images/pratik-tarifler/dostlar-doner-pratik-tarif-1.jpg",
    },
    {
      id: "2",
      foodCategorieName: "Pizza",
      foodImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAwOCwfo6zH1iWBbJPw9oRVD9tS271zzQrg&s",
    },
    {
      id: "3",
      foodCategorieName: "Hamburger",
      foodImageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYtn_y8DGgsrJEbRSb_7auuZ6zeUUfMuGug&s",
    },
    {
      id: "4",
      foodCategorieName: "Tatlı",
      foodImageUrl:
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "5",
      foodCategorieName: "Makarna",
      foodImageUrl:
        "https://images.pexels.com/photos/9016532/pexels-photo-9016532.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: "6",
      foodCategorieName: "Kebap",
      foodImageUrl:
        "https://cdn.pixabay.com/photo/2022/08/27/14/02/kebab-meat-sandwich-7414529_1280.jpg",
    },
  ];
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          padding: 5,
        }}
      >
        Hadi Mutluluğun İçin Yiyelim
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={foodItems}
        renderItem={({ item }) => (
          <Pressable
            style={{
              marginLeft: 6,
              padding: 4,
              marginTop: 3,
              width: 90,
              height: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 45,
              }}
              source={{
                uri: item.foodImageUrl,
              }}
            />
            <Text
              style={{
                color: "rgb(232, 0, 15)",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.foodCategorieName}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
