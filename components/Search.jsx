import React, { useEffect, useState } from "react";
import { View, Image, Animated } from "react-native";
import FormField from "./FormField";
import { images } from "../constants";

const suggestions = [
  "mithai",
  "chola bhatura",
  "samosa",
  "paneer tikka",
  "gulab jamun",
];

const Search = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Update placeholder text after fade-out
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
        
        // Fade in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex flex-row items-center justify-around px-2 -mt-8">
      <Animated.View >
        <FormField 
          label="Search"
          placeholder={`Search for ${suggestions[placeholderIndex]}`}
          name="search"
          type="text"
          otherStyles="w-[82vw] mb-2 rounded-full"
          style={{ opacity: fadeAnim, flex: 1 }}
        />
      </Animated.View>
      <Image
        source={images.search}
        className="w-[30px] h-[30px] mt-10"
        resizeMode="contain"
      />
    </View>
  );
};

export default Search;
