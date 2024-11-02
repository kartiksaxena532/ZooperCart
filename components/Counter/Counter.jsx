import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Counter = ({ onClose }) => {
    const [count, setCount] = useState(1);

    const increaseCount = () => setCount(count + 1);

    const decreaseCount = () => {
        if (count === 1) {
            // Close the counter when count reaches zero
            onClose();
        } else {
            setCount(count - 1);
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
