import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

export default function HomeImageArea() {
  var images = [
    {
      imageid: "1",
      imageurl:
        "https://yemekindirimi.com.tr/wp-content/uploads/2023/09/Screenshot_2023-09-27-13-27-14-595_trendyol.com-edit.jpg",
    },
    {
      imageid: "2",
      imageurl:
        "https://i.ytimg.com/vi/E-nfocVmsdo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEyg3MA8=&rs=AOn4CLDZU62DaoV2nUppkwS4qK5QeUr0Gg",
    },
    {
      imageid: "3",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMvSF775NZPFcgFlnmx8lU0oovuf4NvU6Ow&s",
    },
    {
      imageid: "4",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6-dc7nyWqjVtbQ1xxEcOw-ma2LYYqTQcLA&s",
    },
  ];
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item }) => (
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 140,
              height: 100,
              margin:6
            }}
          >
            <Image
              source={{
                uri: item.imageurl,
              }}
              style={{
                width: 140,
                height: 100,
                borderRadius: 10,
              }}
            />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
