import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Navigate({ data, slideRef, currentIndex }) {
  const prevSlide = () => {
    if (currentIndex > 0) {
      slideRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const nextSlide = () => {
    if (currentIndex < data.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <View className="flex flex-row flex-1 justify-between px-4 py-8 items-center">
      <TouchableOpacity
        onPress={prevSlide}
        className="px-4"
        disabled={currentIndex < 1}
      >
        <Text
          className={`${
            currentIndex < 1 ? "text-gray-300" : "text-main"
          } font-Inter `}
        >
          Back
        </Text>
      </TouchableOpacity>
      {currentIndex < data.length - 1 ? (
        <TouchableOpacity className="px-4" onPress={nextSlide}>
          <Text className="text-main font-Inter">Next</Text>
        </TouchableOpacity>
      ) : (
        <Link href="/home" className="px-4 text-main font-Inter">
          Get Started
        </Link>
      )}
    </View>
  );
}
