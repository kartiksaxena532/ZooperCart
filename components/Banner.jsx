import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const bannerData = [
  {
    image: "https://picsum.photos/600/200",
    title: "Welcome to Our Store!",
    subtitle: "Discover amazing products every day",
    subtitle2: "Get 20% off on your first order",
  },
  {
    image: "https://picsum.photos/600/201",
    title: "Exclusive Deals Await",
    subtitle: "Shop top brands with big discounts",
    subtitle2: "Get 30% off on your second order",
  },
  {
    image: "https://picsum.photos/600/202",
    title: "New Arrivals",
    subtitle: "Find the latest trends here",
    subtitle2: "Get 10% off on your fourth* order",

  },
];

const Banner = () => {
  return (
    <View className="mx-3 mt-5 rounded-lg overflow-hidden h-36">
      <Swiper
        autoplay
        autoplayTimeout={3}
        loop
        showsPagination={false}  
      >
        {bannerData.map((banner, index) => (
          <TouchableOpacity key={index} activeOpacity={1}>
            <ImageBackground
              source={{ uri: banner.image }}
              className="w-full h-48 justify-start py-3  items-center"
              imageStyle={{ borderRadius: 10 }}
            >
              {/* Overlay for text readability */}
              <View className="absolute inset-2 bg-black opacity-50 rounded-lg" />

              <Text className="text-black text-xl font-psemibold text-center mb-2">
                {banner.title}
              </Text>
              <Text className="text-blue-600 bg-yellow-400 skew-y-6 text-md bg-opacity-20 px-3 py-1 font-pregular w-full text-center">
                {banner.subtitle}
              </Text>
              <Text className="text-blue-600 bg-yellow-400 mt-2 text-md -skew-y-[6deg] bg-opacity-20 px-3 py-1 font-pregular w-full text-center  border-1 border-yellow-400">
                {banner.subtitle2}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        ))} 
      </Swiper>
    </View>
  );
};

export default Banner;
