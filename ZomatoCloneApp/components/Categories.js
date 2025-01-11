import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Categories() {
  const items = [
    {
      id: "1",
      name: "Lezzetli",
    },
    {
      id: "2",
      name: "Lüks",
    },
    {
      id: "3",
      name: "Ekonomik",
    },
    {
      id: "4",
      name: "Hızlı Teslimat",
    },
    {
      id: "5",
      name: "Önerilen",
    },
    {
      id: "6",
      name: "Güvenilir",
    },
  ];

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <Pressable
            style={{
              backgroundColor: "#E25822",
              margin: 7,
              padding: 5,
              borderRadius:10,
              width:140,
              height:35,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{
                color:'#FFF',
                fontSize:16,
                fontWeight:'bold'
            }}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
