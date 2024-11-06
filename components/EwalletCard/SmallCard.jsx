import React from 'react';
import { View, Text, FlatList } from 'react-native';

const SmallCard = ({ transactions }) => {
    const renderTransaction = ({ item }) => (
        <View className="border-2 gap-2 m-1 border-gray-700 px-2 rounded-lg ">
            <View className="flex flex-row justify-between">
            <Text className="text-white font-pbold">{item.date}</Text>
            <Text className="text-white font-pbold">{item.cardname}</Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text className="text-gray-400 font-pregular text-sm">{item.description}</Text>
                <Text className={`text-sm mb-2 font-bold ${item.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.type === 'credit' ? '+' : '-'} ₹{item.amount.toFixed(2)}

                </Text>
            </View>
        </View>
    );

    return (
        <View className=" h-[55vh] ">
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderTransaction}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default SmallCard;
