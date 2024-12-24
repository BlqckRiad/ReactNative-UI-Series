import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React from "react";
import { COLORS, images, FONTS, SIZES, icons } from "../constants";
import { useState } from "react";
import { Svg, Polygon } from "react-native-svg";
import { BlurView } from "expo-blur";

export default function HomeScreen() {
  const [showAddToBagModal, setshowAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const [trending, setTrending] = useState([
    {
      id: 0,
      name: "Nike Air Zoom Pegasus 36",
      img: images.nikePegasus36,
      bgColor: "#BF012C",
      type: "RUNNING",
      price: "$186",
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: "Nike Metcon 5",
      img: images.nikeMetcon5Black,
      bgColor: "#D39C67",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: "Nike Air Zoom Kobe 1 Proto",
      img: images.nikeZoomKobe1Proto,
      bgColor: "#7052A0",
      type: "BASKETBALL",
      price: "$199",
      sizes: [6, 7, 8, 9],
    },
  ]);
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 0,
      name: "Nike Metcon 4",
      img: images.nikeMetcon4,
      bgColor: "#414045",
      type: "TRAINING",
      price: "$119",
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: "Nike Metcon 6",
      img: images.nikeMetcon6,
      bgColor: "#4EABA6",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: "Nike Metcon 5",
      img: images.nikeMetcon5Purple,
      bgColor: "#2B4660",
      type: "TRAINING",
      price: "$124",
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: "Nike Metcon 3",
      img: images.nikeMetcon3,
      bgColor: "#A69285",
      type: "TRAINING",
      price: "$99",
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: "Nike Metcon Free",
      img: images.nikeMetconFree,
      bgColor: "#A02E41",
      type: "TRAINING",
      price: "$108",
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]);

  function renderTrendingShoes(item, index) {
    var trendingStyle = {};
    if (index == 0) {
      trendingStyle = { marginLeft: SIZES.padding };
    }
    return (
      <View>
        <TouchableOpacity
          style={{
            height: 240,
            width: 180,
            justifyContent: "center",
            marginHorizontal: SIZES.base,
            ...trendingStyle,
          }}
          onPress={() => {
            setSelectedItem(item);
            setshowAddToBagModal(true);
          }}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.h5,
            }}
          >
            {item.type}
          </Text>

          <View
            style={[
              {
                flex: 1,
                justifyContent: "flex-end",
                marginTop: SIZES.base,
                borderRadius: 10,
                marginRight: SIZES.padding,
                paddingLeft: SIZES.radius,
                paddingRight: SIZES.padding,
                paddingBottom: SIZES.radius,
                backgroundColor: item.bgColor,
              },
              styles.trendingShadow,
            ]}
          >
            <View
              style={{
                height: "35%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body4,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h3,
                }}
              >
                {item.price}
              </Text>
            </View>
          </View>

          {/* SVG Çokgen */}
          <View
            style={{
              position: "absolute",
              top: 27,
              right: 0,
              width: 160,
              height: 80,
            }}
          >
            <Svg height="100%" width="100%">
              <Polygon points="0,0 160,0 160,80" fill="white" />
            </Svg>
          </View>

          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 50,
              right: 0,
              width: "98%",
              height: 80,
              transform: [
                {
                  rotate: "-15deg",
                },
              ],
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecentlyViewed(item, index) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: COLORS.white,
        }}
        onPress={() => {
          setSelectedItem(item)
          setshowAddToBagModal(true)
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: 130,
              height: 100,
            }}
          />
          <View
            style={{
              flex: 1.5,
              marginLeft: SIZES.radius,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body3,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontWeight: "bold",
              }}
            >
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderShoeSizes() {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            width: 35,
            height: 25,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 5,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 5,
            backgroundColor:selectedItem.sizes[index] == selectedSize ? COLORS.white : null
          }}
          onPress={() => {
            setSelectedSize(item)
          }}
        >
          
          <Text style={{
            color:selectedItem.sizes[index] == selectedSize ? COLORS.black : COLORS.white , 
            ...FONTS.body4
          }}>{item}</Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}
      >
        TRENDING
      </Text>

      {/*TRENDING AREA*/}
      <View style={{ height: 260, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>
      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            marginTop: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
          },
          styles.recentContainerShadow,
        ]}
      >
        <View
          style={{
            width: 70,
            marginLeft: SIZES.base,
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
            source={images.recentlyViewedLabel}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>

      {/* MODAL */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAddToBagModal}
        >
          <BlurView
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            blurType="light"
            blurAmount={200}
            reducedTransparencyFallbackColor="white"
          >
            <TouchableOpacity
              style={styles.absolute}
              onPress={() => {
                setSelectedItem(null);
                setSelectedSize("");
                setshowAddToBagModal(false);
              }}
            ></TouchableOpacity>
            {/* Modal Content */}
            <View
              style={{
                justifyContent: "center",
                width: "85%",
                backgroundColor: selectedItem.bgColor,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: -SIZES.padding * 2,
                }}
              >
                <Image
                  source={selectedItem.img}
                  resizeMode="contain"
                  style={{
                    width: "90%",
                    height: 170,
                    transform: [{ rotate: "-15deg" }],
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body2,
                }}
              >
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base / 2,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}
              >
                {selectedItem.type}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body1,
                }}
              >
                {selectedItem.price}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.body3,
                    }}
                  >
                    Select Size
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginLeft: SIZES.radius,
                  }}
                >
                  {renderShoeSizes()}
                </View>
              </View>

              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 70,
                  marginTop: SIZES.base,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
                onPress={() => {
                  setSelectedItem(null);
                  setSelectedSize("");
                  setshowAddToBagModal(false);
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.largeTitleBold,
                  }}
                >
                  Add to Bag
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  recentContainerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
