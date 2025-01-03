import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import SPACING from "../config/SPACING";

import Ionicons from "@expo/vector-icons/Ionicons";
const SearchField = () => {
  return (
    <View
      style={{
        borderRadius: SPACING,
        overflow: "hidden",
      }}
    >
      <BlurView intensity={30} style={{
        alignItems:'center',
        justifyContent:'center',

      }}>
        <TextInput
          style={{
            width: "100%",
            color: colors.secondary,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.light}
        />

        <Ionicons
          style={{
            position: "absolute",
            left: SPACING / 2,
          }}
          name="search"
          size={SPACING * 2}
          color={colors.light}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
