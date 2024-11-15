import React from 'react';
import { View, Text, FlatList } from 'react-native';

const SmallCardOrder = () => {  // Default to an empty array

    const orders = [
        { id: 1, date: '2024-11-01', amount: 120.5, description: 'Grocery Shopping', type: 'debit', cardname: 'MasterCard' },
        { id: 2, date: '2024-11-02', amount: 500.0, description: 'Salary', type: 'credit', cardname: 'Visa' },
        { id: 3, date: '2024-11-03', amount: 30.75, description: 'Coffee Shop', type: 'debit', cardname: 'MasterCard' },
        { id: 4, date: '2024-11-01', amount: 120.5, description: 'Grocery Shopping', type: 'debit', cardname: 'AMEX' },
        { id: 5, date: '2024-11-02', amount: 500.0, description: 'Salary', type: 'credit', cardname: 'Visa' },
        { id: 6, date: '2024-11-03', amount: 30.75, description: 'Coffee Shop', type: 'debit', cardname: 'MasterCard' },
        { id: 7, date: '2024-11-01', amount: 120.5, description: 'Grocery Shopping', type: 'debit', cardname: 'Visa' },
        { id: 8, date: '2024-11-02', amount: 500.0, description: 'Salary', type: 'credit', cardname: 'MasterCard' },
        { id: 9, date: '2024-11-03', amount: 30.75, description: 'Coffee Shop', type: 'debit', cardname: 'AMEX' },
    ];

    
    return (
        <View className="h-full mb-10 mx-2 overflow-y-scroll">
            {orders.length > 0 ? (
                orders.map((item) => (
                    <View
                        key={item.id}
                        className="border-2 gap-2 m-1 border-gray-700 px-2 rounded-lg"
                    >
                        <View className="flex flex-row justify-between">
                            <Text className="text-white font-pbold">{item.date}</Text>
                            <Text className="text-white font-pbold">{item.cardname}</Text>
                        </View>
                        <View className="flex flex-row justify-between">
                            <Text className="text-gray-400 font-pregular text-sm">
                                {item.description}
                            </Text>
                            <Text
                                className={`text-sm mb-2 font-bold ${
                                    item.type === 'credit' ? 'text-green-500' : 'text-red-500'
                                }`}
                            >
                                {item.type === 'credit' ? '+' : '-'} ₹{item.amount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text className="text-center text-gray-400">No transactions available.</Text>
            )}
        </View>
    );
};

export default SmallCardOrder;

