import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import useCartStore from '../../context/useCartStore';

const Counter = ({ onClose, product }) => {
  const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, carts } = useCartStore();
  const cartItem = carts.find((item) => item.id === product.id);

  if (!cartItem || cartItem.quantity < 1) {
    // Fallback if quantity is < 1
    return (
      <TouchableOpacity
        onPress={() => addToCart(product)}
        className="bg-yellow-300 w-[90%] rounded-lg h-7 py-1"
      >
        <Text className="text-[14px] text-center font-pbold">Add to Cart</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View className="flex-row items-center justify-between bg-yellow-300 w-[90%] rounded-xl h-7">
      <TouchableOpacity
        onPress={() => decreaseQuantity(product.id)}
        className="bg-gray-200 px-2 py-1 rounded-lg"
      >
        <Text className="text-[14px] font-pbold">-</Text>
      </TouchableOpacity>
      <Text className="text-[14px] font-pbold">{cartItem.quantity}</Text>
      <TouchableOpacity
        onPress={() => increaseQuantity(product.id)}
        className="bg-gray-200 px-2 py-1 rounded-lg"
      >
        <Text className="text-[14px] font-pbold">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
