import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text, Image,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HugeListSmall = ({ title }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        const data = await response.json();
        if (data.meals) {
          // Slice the data to get only the first 20 items
          setMeals(
            data.meals.slice(0, 20).map((meal) => ({
              image: meal.strMealThumb,
              name: meal.strMeal,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMealData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity className="flex flex-row justify-center items-center">
    <View className="flex flex-col py-2 ml-3 justify-start bg-transparent h-[15vh] w-[25vw] rounded-lg">
      <View className="shadow-md border-[0.5px] border-white shadow-yellow-600 rounded-full">
        <Image source={{ uri: item.image }} className="w-full h-[60px] rounded-full ring-2 ring-slate-500" />
      </View>
      <View className="flex flex-row justify-center">
        <Text
          className="text-[11px] text-white font-psemibold text-center mt-1"
          numberOfLines={1}
          ellipsizeMode="tail" 
        >
          {item.name}
        </Text>
      </View>
    </View>
  </TouchableOpacity>

  );

  return (
    <View className="flex flex-col">
      <Text className="text-[15px] text-white text-start capitalize mx-3 my-2 font-psemibold text-bold">{title}</Text>
      <ScrollView>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </ScrollView>
    </View>
  );
};

export default HugeListSmall;
