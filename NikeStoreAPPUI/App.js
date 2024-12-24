import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";

import { icons, COLORS, FONTS, SIZES } from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitleAlign: "center",
                title: "SHOE SELECTOR",
                headerTitleStyle: {
                  ...FONTS.navTitle,
                  color: COLORS.lightGray,
                },
                headerLeft: ({ onPress }) => (
                  <TouchableOpacity
                    style={{ marginLeft: SIZES.padding }}
                    onPress={onPress}
                  >
                    <Image
                      source={icons.menu}
                      resizeMode="contain"
                      style={{ width: 25, height: 25 }}
                    />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity
                    style={{ marginRight: SIZES.padding }}
                    onPress={() => console.log("Header Sağ Taraf Tıklandı")}
                  >
                    <Image
                      source={icons.search}
                      resizeMode="contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
