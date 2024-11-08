import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {Svg,Defs ,Path ,Use, G} from 'react-native-svg';

import { wavyData } from '../../constants/products';
// Update the component to accept an image source as a prop
const AdBanner = ({ imageSource }) => {
  return (
    <View className="h-[190px] my-8 w-full flex justify-center items-center">
      
      {/* Display the image if provided */}
      {imageSource ? (
        <>
            <Svg 
            width="100%"
            height="30%"
            fill="#1e1e2d"
            viewBox='100 0 1400 1000'
            preserveAspectRatio='none'
            className="absolute w-full top-0 z-[999] rotate-180 "
            >
              <Defs>
                <Path id="wave" d={wavyData} />
              </Defs>
              <G>
                <Use href="#wave" y="320"/>
              </G>
            </Svg>
        <Image
          source={imageSource} // Use the imageSource prop
          className="h-full w-full rounded-sm" // Full width and height
          resizeMode="cover" // Adjust to cover the view
        />
        <Svg 
      width="100%"
      height="30%"
      fill="#1e1e2d"
      viewBox='100 0 1400 1000'
      preserveAspectRatio='none'
      className="absolute w-full -bottom-1"
      >
        <Defs>
          <Path id="wave" d={wavyData} />
        </Defs>
        <G>
          <Use href="#wave" y="320"/>
        </G>
      </Svg>
        </>
      ) : (
        <Text className="text-xl text-center text-white font-pregular">Place Your Ad Here {"\n"} Contact : maykreate.vercel.app </Text>
      )}
      

  

    </View>

    
  );
};

export default AdBanner;
