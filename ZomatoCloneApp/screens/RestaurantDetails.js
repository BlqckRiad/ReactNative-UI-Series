import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import menu from "../data/menuData";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function RestaurantDetails() {
  const [bookMark, setBookMark] = useState(false);
  const menuData = menu;
  const route = useRoute();
  const data = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        paddingTop: 12,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={{
            backgroundColor: "#002d62",
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            right: 10,
          }}
        >
          <Ionicons name="camera-outline" size={28} color="black" />
          <Pressable onPress={() => setBookMark(!bookMark)}>
            {bookMark ? (
              <Entypo
                style={{
                  marginHorizontal: 10,
                }}
                name="bookmark"
                size={28}
                color="black"
              />
            ) : (
              <Feather
                style={{
                  marginHorizontal: 10,
                }}
                name="bookmark"
                size={28}
                color="black"
              />
            )}
          </Pressable>
          <Entypo name="share" size={28} color="black" />
        </Pressable>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#eaeaea",
          paddingTop: 2,
          paddingHorizontal: 8,
        }}
      >
        <View
          style={{
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
              fontWeight: "500",
            }}
          >
            {data.cuisines}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#6082b6",
              fontWeight: "500",
            }}
          >
            {data.smalladress}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "green",
              padding: 6,
              borderRadius: 15,
              top: 3,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                right: 3,
                color: "white",
              }}
            >
              {data.aggregate_rating}
            </Text>
            <AntDesign name="star" size={16} color="white" />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F9629F",
              padding: 6,
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
              }}
            >
              30
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
              }}
            >
              FOTOĞRAF
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="delivery-dining" size={30} color="black" />
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <Text>Mode</Text>
            <Text>Delivery</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="time-outline" size={30} color="black" />
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <Text>TIME</Text>
            <Text>30Mins Of Free</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="percent-outline"
            size={30}
            color="black"
          />
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <Text>OFFERS</Text>
            <Text>View All</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginLeft: 10,
          backgroundColor: "#C8C8C8",
          flexDirection: "row",
          marginTop: 10,
          padding: 5,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <Fontisto name="motorcycle" size={24} color="black" />
        <Text
          style={{
            paddingLeft: 10,
          }}
        >
          200 TL ÜZERİ SİPARİŞLERE ÜCRETSİZ TESLİMAT
        </Text>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Full Menu
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "pink",
          width: 120,
          borderWidth: 1,
          borderColor: "#FF00BF",
          marginLeft: 10,
          marginTop: 10,
        }}
      ></View>
      <FlatList
        data={menuData}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "100%",
                height: 220,
                backgroundColor: "#EAEAEA",
                justifyContent: "space-between",
                marginTop: 10,
                paddingLeft: 30,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item.price}
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: 20, flexDirection: "row" }}>
                    {/* Generate stars based on item.star */}
                    {[...Array(5)].map((_, index) => (
                      <Ionicons
                        key={index}
                        name={
                          index < Math.floor(item.star)
                            ? "star"
                            : "star-outline"
                        }
                        size={20}
                        color="gold"
                      />
                    ))}
                  </View>
                  <View style={{
                    marginLeft:10,
                    backgroundColor:'pink',
                    
                  }}>
                    <Text style={{
                      fontSize:16,
                      fontWeight:'400',
                      color:'red',
                      margin:2
                    }}>{item.bestSeller}</Text>
                  </View>
                </View>

                <View style={{
                  flexDirection:'row',
                }}>
                   <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    width:40,
                    height:40,
                    borderRadius:20,
                    borderWidth:1,
                    borderColor:'black',
                    marginRight:10,
                   }}>
                   <AntDesign name="hearto" size={24} color="#EF0107" />
                   </View>

                   <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    width:40,
                    height:40,
                    borderRadius:20,
                    borderWidth:1,
                    borderColor:'black',
                    marginLeft:10,
                   }}>
                  <FontAwesome name="share" size={24} color="#EF0107" />
                   </View>
                </View>
              </View>
              <View>
                
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
