import { View, Text, FlatList } from "react-native";
import React from "react";
import preload from "./preload";
import SingleSlide from "./SingleSlide";

export default function PreLoader() {
  return (
    <FlatList
      data={preload}
      renderItem={({ item }) => <SingleSlide item={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
