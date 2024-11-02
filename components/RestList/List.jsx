import React from 'react';
import { View, Text, FlatList ,TouchableOpacity } from 'react-native';
import products from '../../constants/products'; // Assuming products is an array of product objects
import Photo from './Image';


const List = () => {
    const renderItem = ({ item }) => (
      <View className="flex flex-row justify-between items-center py-2 px-2 rounded-md">
    <Photo item={item} />
    <View className="flex flex-col justify-between">
        <View className=" relative w-full h-[17vh]">
          <Text className="text-white text-lg  font-pbold">{item.name}</Text>

          <Text className="text-white text-md   font-psemibold">Get it for ₹ {item.price.toFixed(2)}</Text>
          <Text className="text-yellow-500 text-md   font-pthin">Rating: {item.rating} ⭐</Text>

          <View className="flex flex-row justify-between">
          <Text className="text-white text-sm   font-pthin">North Indian</Text>
          <Text className="text-yellow-500 text-sm font-pthin">4.5</Text>
          </View>
          <View className="flex flex-row justify-between">
          <Text className="text-white text-sm   font-pthin">Indrapuram</Text>
          <Text className="text-yellow-500 text-sm  font-pthin">10-20 mins</Text>
          </View>
          </View>
          <TouchableOpacity>
      <View className="flex justify-center items-center text-center bg-red-500 rounded-full text-md w-[45vw] h-10">
        <Text className="text-white text-lg font-psemibold">⚡Extra {Math.floor(Math.random() * (15 - 5)) + 5}% Off</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  
    return (
        <View className="mx-3">
            <Text className="text-white text-lg px-2 font-semibold">Explore Top Restaurants</Text>
        <FlatList
        data={products.slice(0, 8)} // Only take the first 8 products
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
      />
      </View>
      
    );
  };
  

export default List;
