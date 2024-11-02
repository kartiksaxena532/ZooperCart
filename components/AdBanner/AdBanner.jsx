import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

// Update the component to accept an image source as a prop
const AdBanner = ({ imageSource }) => {
  return (
    <View className="h-[180px] my-3 w-full flex justify-center items-center">
      {/* Display the image if provided */}
      {imageSource ? (
        <Image
          source={imageSource} // Use the imageSource prop
          className="h-full w-full rounded-sm" // Full width and height
          resizeMode="cover" // Adjust to cover the view
        />
      ) : (
        <Text className="text-xl text-center text-white font-pregular">Place Your Ad Here {"\n"} Contact : maykreate.vercel.app </Text>
      )}
    </View>
  );
};

export default AdBanner;
