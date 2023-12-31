import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";

export default function SingleSlide({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{ width }}
      className="flex-1 justify-center items-center space-y-6 p-6"
    >
      <Image source={item.image} className="h-[350px] aspect-square" />
      <Text className="text-3xl font-Poppins text-center text-main">
        {item.title}
      </Text>
      <Text className="text-base text-center font-Mont text-gray-500">
        {item.description}
      </Text>
    </View>
  );
}
