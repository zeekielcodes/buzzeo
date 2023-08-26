import { View, Text, ActivityIndicator } from "react-native";
import React, { useCallback } from "react";
import PreLoader from "../components/PreLoader";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

const Home = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Black.ttf"),
    Poppins: require("../assets/fonts/Poppins-Black.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return SplashScreen.hideAsync();
  }
  return (
    <PreLoader />
    // <View className="flex-1 bg-black text-white">
    //   <Text>Home</Text>
    // </View>
  );
};

export default Home;
