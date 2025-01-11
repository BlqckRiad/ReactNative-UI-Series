import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const RestaurantComponents = (props) => {
  const restaurantData = props.restaurant;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("RestaurantDetails",{
          id:restaurantData.id,
          name:restaurantData.name,
          cuisines:restaurantData.cuisines,
          aggregate_rating : restaurantData.aggregate_rating,
          adress: restaurantData.adress,
          smalladress: restaurantData.smalladress
        });
      }}
    >
      <View>
        <View
          style={{
            margin: 10,
          }}
        >
          <ImageBackground
            style={{
              width: "100%",
              aspectRatio: 6 / 4,
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
            source={{ uri: restaurantData.featured_image }}
          >
            <View
              style={{
                position: "absolute",
                right: 8,
                bottom: 10,
                backgroundColor: "gray",
                width: 75,
                height: 25,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="delivery-dining" size={24} color="white" />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {restaurantData.time}
              </Text>
            </View>
          </ImageBackground>

          <View
            style={{
              padding: 10,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600" }}>
                {restaurantData.name}
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginVertical: 5 }}>
                {restaurantData.cuisines}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#17B169",
                padding: 7,
                borderRadius: 6,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingRight: 5,
                  color: "white",
                  fontSize: 17,
                }}
              >
                {restaurantData.aggregate_rating}
              </Text>
              <AntDesign name="star" size={18} color="white" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 5,
              marginBottom: 8,
              borderBottomLeftRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            <Text
              style={{ height: 1, borderColor: "#D3D3D3", borderWidth: 1 }}
            ></Text>
            <View
              style={{
                marginTop: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  backgroundColor: "#7CB9E8",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="doubleright" size={20} color="white" />
              </View>
              <View></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {restaurantData.no_of_Delivery} + Satış{" "}
                </Text>
              </View>
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  GÜVENİLİR
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  HIZLI
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantComponents;

const styles = StyleSheet.create({});
