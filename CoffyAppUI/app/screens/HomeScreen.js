import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { act, useState } from "react";

import SPACING from "../config/SPACING.js";
import colors from "../config/colors.js";
import { BlurView } from "expo-blur";

import Ionicons from "@expo/vector-icons/Ionicons";

import SearchField from "../components/SearchField.js";
import Categories from "../components/Categories.js";
import coffees from "../config/coffees.js";
const avatar = require("../../assets/avatar.jpg");

const WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
  const [activeCategoryId, setactiveCategoryId] = useState(null);
  return (
    <SafeAreaView
      style={{
        padding: SPACING,
        top: SPACING * 3,
      }}
    >
      <ScrollView
        style={{
          padding: SPACING,
          marginBottom: SPACING * 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity>

          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING * 2,
              borderWidth: 1,
              borderColor: colors.light,
            }}
          >
            <BlurView
              style={{
                height: "100%",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  padding: 2,
                }}
                source={avatar}
              />
            </BlurView>
          </View>
        </View>
        <View
          style={{
            width: "80%",
            marginVertical: SPACING * 3,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 3.5,
              fontWeight: "600",
            }}
          >
            Find the best coffee for you
          </Text>
        </View>

        <SearchField />
        <Categories onChange={(id) => setactiveCategoryId(id)} />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees
            .filter((coffee) => {
              if (activeCategoryId === null) {
                return true;
              }
              if (activeCategoryId === 0) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map((coffee) => (
              <View
                key={coffee.id}
                style={{
                  width: WIDTH / 2 - SPACING * 3,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                  >
                    <Image
                      source={coffee.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SPACING * 2,
                      }}
                    />

                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                        }}
                        tint="dark"
                        intensity={75}
                      >
                        <Ionicons
                          name="star"
                          size={SPACING * 1.7}
                          color={colors.primary}
                          style={{
                            marginLeft: SPACING / 2,
                          }}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING / 2,
                          }}
                        >
                          {coffee.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "600",
                      fontSize: SPACING * 1.7,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {" "}
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: colors.white,
                      fontWeight: "400",
                      fontSize: SPACING * 1.2,
                    }}
                  >
                    {" "}
                    {coffee.included}
                  </Text>
                  <View
                    style={{
                      marginVertical: SPACING / 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: colors.primary,
                          marginRight: SPACING / 2,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        {coffee.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        console.log(coffee.name + " Sepete Eklendi");
                      }}
                      style={{
                        backgroundColor: colors.primary,
                        width: SPACING * 3.5,
                        height: SPACING * 3.5,
                        borderRadius: SPACING * 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name="add-outline"
                        size={SPACING * 2}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
        <View
          style={{
            marginTop: SPACING * 2,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontWeight: "400",
              fontSize: SPACING * 2,
            }}
          >
            Special For You
          </Text>
        </View>

        <View
          style={{
            marginTop: SPACING * 2,
          }}
        >
          <BlurView
            tint="dark"
            intensity={60}
            style={{
              padding: SPACING * 1.5,
              justifyContent:'space-between',
              flexDirection:'row',
              marginBottom:SPACING
            }}
          >
            <View
              style={{
                width: 150,
                height: 130,    
                borderRadius: SPACING,              
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SPACING,
                }}
                source={coffees[2].image}
              />
            </View>
            <View style={{
                width:200,
                alignItems:'center',
            }}>
                <Text style= {{
                    color:colors.white,
                    fontSize:SPACING*1.7,
                    fontWeight:'600',
                }}
                >
                {coffees[2].included.toUpperCase()}
                </Text>

                <Text style= {{
                    color:colors.white,
                    fontSize:SPACING*1.1,
                    fontWeight:'500',
                }}
                >
                {coffees[2].description.toUpperCase()}
                </Text>
                <TouchableOpacity style={{
                    position:'absolute',
                    right:5,
                    bottom:5
                }}>
                    <Text style={{
                        color:colors.primary,
                        fontSize:SPACING*1.3,
                        fontWeight:'600',
                    }}>
                        Go to Details ->
                    </Text>
                </TouchableOpacity>
            </View>
          </BlurView>
                    
          <BlurView
            tint="dark"
            intensity={60}
            style={{
              padding: SPACING * 1.5,
              justifyContent:'space-between',
              flexDirection:'row',
              marginBottom:SPACING
            }}
          >
            <View
              style={{
                width: 150,
                height: 130,    
                borderRadius: SPACING,              
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SPACING,
                }}
                source={coffees[3].image}
              />
            </View>
            <View style={{
                width:200,
                alignItems:'center',
            }}>
                <Text style= {{
                    color:colors.white,
                    fontSize:SPACING*1.7,
                    fontWeight:'600',
                }}
                >
                {coffees[3].included.toUpperCase()}
                </Text>

                <Text style= {{
                    color:colors.white,
                    fontSize:SPACING*1.1,
                    fontWeight:'500',
                }}
                >
                {coffees[3].description.toUpperCase()}
                </Text>
                <TouchableOpacity style={{
                    position:'absolute',
                    right:5,
                    bottom:5
                }}>
                    <Text style={{
                        color:colors.primary,
                        fontSize:SPACING*1.3,
                        fontWeight:'600',
                    }}>
                        Go to Details ->
                    </Text>
                </TouchableOpacity>
            </View>
          </BlurView>

          <BlurView
            tint="dark"
            intensity={60}
            style={{
              padding: SPACING * 1.5,
              justifyContent:'space-between',
              flexDirection:'row',
              marginBottom:SPACING
            }}
          >
            <View
              style={{
                width: 150,
                height: 130,    
                borderRadius: SPACING,              
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SPACING,
                }}
                source={coffees[6].image}
              />
            </View>
            <View style={{
                width:200,
                alignItems:'center',
            }}>
                <Text style= {{
                    color:colors.white,
                    fontSize:SPACING*1.7,
                    fontWeight:'600',
                }}
                >
                {coffees[6].included.toUpperCase()}
                </Text>

                <Text style= {{
                    color:colors.white,
                    fontSize:SPACING*1.1,
                    fontWeight:'500',
                }}
                >
                {coffees[6].description.toUpperCase()}
                </Text>
                <TouchableOpacity style={{
                    position:'absolute',
                    right:5,
                    bottom:5
                }}>
                    <Text style={{
                        color:colors.primary,
                        fontSize:SPACING*1.3,
                        fontWeight:'600',
                    }}>
                        Go to Details ->
                    </Text>
                </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
