import React from 'react';
import { View, Text } from 'react-native';

const Badge = ({ label, color = 'text-yellow-200', borderColor = 'border-yellow-300' }) => {
  return (
    <View className={`border-2 flex items-center justify-center py-1 px-3 rounded-full ${borderColor}`}>
      <Text className={`${color} text-xs font-pregular`}>{label}</Text>
    </View>
  );
};

export default Badge;
