import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import useCartStore from '../../context/useCartStore';

const Counter = ({ onClose, product ,quantity}) => {

  const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, carts } = useCartStore();

  return (
    <View className="flex-row items-center justify-between bg-yellow-300 w-[90%] rounded-xl h-7 ">
      <TouchableOpacity onPress={() => increaseQuantity(product.id)} className="bg-gray-200 px-2 py-1 rounded-lg ">
        <Text className="text-[14px] font-pbold ">-</Text>
      </TouchableOpacity>
      <Text className="text-[14px] font-pbold">{carts.length}</Text>
      <TouchableOpacity onPress={() => increaseQuantity(product.id)} className="bg-gray-200  px-2 py-1  rounded-lg ">
        <Text className="text-[14px]  font-pbold" >+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
