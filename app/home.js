import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function home() {
  return (
    <SafeAreaView className="flex-1 p-4">
      <Text className="font-Inter text-3xl">Welcome! </Text>
      <Text className="text-base font-Mont">Let's get started!</Text>
    </SafeAreaView>
  );
}
