import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {images} from "../constants"
import { Link } from "expo-router";
import Counter from "./Counter/Counter";
import products from "../constants/products"



const HugeListDouble = ({title,buttonText}) => {
  const [isCounterVisibleMap, setIsCounterVisibleMap] = useState({});

  // Toggle the counter for a specific item using its index
  const toggleCounterVisibility = (index) => {
    setIsCounterVisibleMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderItem = ({ item ,index}) => (
    <Link href={`/product/${item.name}`}>
    <View className="flex flex-row justify-center items-center">
     <Image source={images.off} className="absolute top-1 left-1 z-10 w-[10vw] h-[5.5vh]" />
    <Text className="absolute text-black-100 text-start px-1 top-2 left-2 z-[99] font-psemibold text-[10px]">
      {Math.floor(Math.random() * (15 - 5)) + 5}% {"\n"} Off
    </Text>

    <View className="flex flex-col  py-2 ml-3 justify-start bg-transparent ring-1 ring-slate-500 h-[23vh] w-[28vw] rounded-lg">
      <View className="shadow-md shadow-white border-[0.5px] border-white rounded-md">
        <Image source={{ uri: item.image }} className="w-full h-[70px] rounded-md" />
      </View>

      <View className="flex flex-row items-center">
        <Text className="text-[14px] text-white font-psemibold text-start text-bold mt-1">{item.name}</Text>
      </View>

      <View className="flex flex-col text-white justify-start">
        <Text className="text-[12px] text-white font-pregular">
          {item.rating} <Image source={images.star} className="w-[11px] h-[11px] rounded-md" />
        </Text>
        <Text className="text-[10px] text-white font-pregular pb-1">₹ {item.price}</Text>
      </View>

      {isCounterVisibleMap[index] ? (
        <Counter onClose={() => toggleCounterVisibility(index)} />
      ) : (
        <TouchableOpacity
          onPress={() => toggleCounterVisibility(index)}
          className="bg-yellow-300 w-[80%] rounded-lg  h-7 py-1"
        >
          <Text className="text-[12px] text-center font-pbold ">{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
  </Link>
  );

  return (
    <View className="flex flex-col">
    <Text className="text-[18px] text-white text-center capitalize mx-3 my-2 font-psemibold text-bold">{title}</Text>
    <Image source={images.path} className="w-[100px] h-[20px] mx-auto -mt-5" resizeMode='contain'/>
    <View className="flex flex-col">
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View>
            {index % 2 === 0 && (
              <View>
                {renderItem({ item })}
                {index + 1 < products.length && renderItem({ item: products[index + 1] })}
              </View>
            )}
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
    </View>
  );
};


export default HugeListDouble;