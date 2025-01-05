import React, { useEffect, useState } from "react";
import { View, Image, Animated, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);  
  const router = useRouter();

  useEffect(() => {
    if (isTyping) return;
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
  }, [isTyping]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search/${searchQuery}`);
    }
  };

  const handleChangeText = (text) => {
    setSearchQuery(text);
    setIsTyping(text.length > 0);
  };

  return (
    <View className="flex flex-row items-center justify-around px-2 ">
      <View className="w-[90%] h-12 px-4 bg-black-100 rounded-md border-2 border-blue-800 focus:border-secondary items-center flex-row">
        <TextInput
          value={searchQuery}
          onChangeText={handleChangeText}
          placeholder={`Search for ${suggestions[placeholderIndex]}`}
          placeholderTextColor={'#6B7280'}
         className="flex-1 text-white font-psemibold text-sm"
        />
           </View>
      <TouchableOpacity onPress={handleSearch}>
        <Image
          source={images.search}
          className="w-[30px] h-[30px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
