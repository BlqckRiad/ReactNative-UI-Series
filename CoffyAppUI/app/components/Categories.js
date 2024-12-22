import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import SPACING from "../config/SPACING.js";
import colors from "../config/colors.js";
import Category from "../config/categories.js";

const Categories = ({onChange}) => {
  const [activeCategoryId, setactiveCategoryId] = useState(0); // useState burada tanımlanmalı
   const handlePress = (id) => {
    setactiveCategoryId(id)
    onChange(id);
   }
  return (
    <FlatList
      data={Category}
      horizontal={true}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            marginRight: SPACING * 2,
          }}
          onPress={() => handlePress(item.id)} // Örnek bir işlem
        >
          {item.id === activeCategoryId ? (
            <Text
              style={{
                color: "orange",
                fontSize: SPACING * 2,
              }}
            >
              {item.name}
            </Text>
          ) : (
            <Text
              style={{
                color: colors.secondary,
                fontSize: SPACING * 2,
              }}
            >
              {item.name}
            </Text>
          )}
        </TouchableOpacity>
      )}
    />
    


  );
};

export default Categories;

const styles = StyleSheet.create({});
