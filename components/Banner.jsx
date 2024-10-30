import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const bannerData = [
  {
    image: "https://picsum.photos/600/200",
    title: "Welcome to Our Store!",
    subtitle: "Discover amazing products every day",
  },
  {
    image: "https://picsum.photos/600/201",
    title: "Exclusive Deals Await",
    subtitle: "Shop top brands with big discounts",
  },
  {
    image: "https://picsum.photos/600/202",
    title: "New Arrivals",
    subtitle: "Find the latest trends here",
  },
];

const Banner = () => {
  return (
    <View className="mx-3 mt-5 rounded-lg overflow-hidden h-48">
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination
        dotColor="#FFFFFF"
        activeDotColor="#FFDD57"
        loop
      >
        {bannerData.map((banner, index) => (
          <TouchableOpacity key={index} activeOpacity={0.9}>
            <ImageBackground
              source={{ uri: banner.image }}
              className="w-full h-48 justify-center items-center"
              imageStyle={{ borderRadius: 10 }}
            >
              {/* Overlay for text readability */}
              <View className="absolute inset-0 bg-black opacity-50 rounded-lg" />

              <Text className="text-black text-2xl font-bold font-psemibold text-center mb-2">
                {banner.title}
              </Text>
              <Text className="text-blue-600 bg-yellow-400 bg-opacity-20 px-3 py-1 font-pregular w-full text-center">
                {banner.subtitle}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default Banner;
