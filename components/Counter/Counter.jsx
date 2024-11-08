import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import useCartStore from '../../context/CartStore'; 

const Counter = ({ onClose }) => {
    const [count, setCount] = useState(1);
    const addToCart = useCartStore((state) => state.addToCart);
    const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);


    const increaseCount = (item) => {
        setCount(count + 1);
        updateItemQuantity(item, count + 1); // Update in the store
      };
    
      const decreaseCount = (item) => {
        if (count === 1) {
          // Remove the item if the count reaches 1 and the user clicks '-'
          removeFromCart(item);
          onClose(); // Close the counter modal
        } else {
          setCount(count - 1);
          updateItemQuantity(item, count - 1); // Update in the store
        }
      };

    return (
        <View className="flex-row items-center justify-between bg-yellow-300 w-[90%] rounded-xl h-7 ">
            <TouchableOpacity onPress={decreaseCount} className="bg-gray-200 px-2 py-1 rounded-lg ">
                <Text className="text-[14px] font-pbold ">-</Text>
            </TouchableOpacity>
            <Text className="text-[14px] font-pbold  ">{count}</Text>
            <TouchableOpacity onPress={increaseCount} className="bg-gray-200  px-2 py-1  rounded-lg ">
                <Text className="text-[14px]  font-pbold" >+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Counter;
