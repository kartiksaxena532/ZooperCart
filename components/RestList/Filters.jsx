import React from "react";
import { View, Text, FlatList } from "react-native";

const Filters = () => {
  const filters = ["Filters","Sort By", "Free Delivery", "Premium", "Under $20"]; // Example filters

  const renderItem = ({ item }) => (
    <View className="flex justify-center items-center px-5 py-3 mb-2 border border-white rounded-full mx-1">
      <Text className="text-white font-psemibold text-xs">{item}</Text>
    </View>
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
