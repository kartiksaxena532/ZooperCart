import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageTextInput = ({ imageSource, text, iconSource }) => {
  return (
    <View className="flex justify-center items-center mx-4 my-2">
      <View className="flex flex-row items-center justify-between w-full border-2 bg-black-200 border-white px-2 py-2 rounded-[12px]">
        <Image source={imageSource} className="w-10 h-10 rounded-full" />
        
   
        <Text className="font-pregular text-white text-lg">{text}</Text>
        
      
        <Image source={iconSource} className="w-6 h-6 rounded-full -rotate-90" />
      </View>
    </View>
  );
};

export default ImageTextInput;
