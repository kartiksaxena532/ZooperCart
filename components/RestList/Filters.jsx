import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { images } from "../../constants"; // Import your icons here
import AntDesign from '@expo/vector-icons/AntDesign';

const Filters = () => {
  // Use an array of objects for filters
  const filters = [
    { text: "Filters", icon:  images.filters },
    { text: "Sort By", icon: images.downArrow },
    { text: "Free Delivery", icon: images.basket }, // Example icon
    { text: "Premium", icon: images.premium }, // Example icon
    { text: "Under ₹ 20", icon: null },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity className="flex justify-center items-center px-5 py-3 mb-2 border border-white rounded-full mx-1 flex-row">
     
     <Text className="text-white font-psemibold text-xs">{item.text}</Text>
      {item.icon && (
        <Image source={item.icon} className="w-4 h-4 ml-2" /> // Render icon if it exists
      )}
      
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={filters}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding if desired
      />
    </View>
  );
};

export default Filters;
