import { FlatList, TouchableOpacity, View, Text, Image ,ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState ,useEffect} from "react";
import {images} from "../constants"
import { Link } from "expo-router";
import Counter from "./Counter/Counter";
import products from "../constants/products"
import useCartStore from '../context/useCartStore';
import useProductStore from "../context/useProductStore";


const HugeListDouble = ({title,buttonText}) => {
  const [isCounterVisibleMap, setIsCounterVisibleMap] = useState({});
  const { products, loading, error, fetchProducts } = useProductStore();
  const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart, carts } = useCartStore();

  // Toggle the counter for a specific item using its index
  const toggleCounterVisibility = (index) => {
    setIsCounterVisibleMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (!loading) {
    <SafeAreaView className="flex justify-center items-center">
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading products...</Text>
    </SafeAreaView>
  }

  if (error) {
    return <View ><Text className="text-red-500 font-pbold">{error}</Text></View>
  }



  const renderItem = ({ item: product, index}) => (
    <Link href={`/product/${product.id}`}>
      <View className="flex-grow flex-row justify-between items-stretch h-[22vh]">
        <Image source={images.off} className="absolute top-1 left-1 z-10 w-[10vw] h-[5.5vh]" />
        <Text className="absolute text-black-100 text-start px-1 top-2 left-2 z-[99] font-psemibold text-[10px]">
          {Math.floor(Math.random() * (15 - 5)) + 5}% {"\n"} Off
        </Text>

        <View className="flex flex-col py-2 ml-3 justify-start bg-transparent ring-1 ring-slate-500 h-[23vh] w-[24vw] rounded-lg">
          <View className="shadow-md shadow-white border-[0.5px] border-white rounded-md">
            <Image source={{ uri: product.thumbnail }} className="w-full h-[70px] rounded-md  bg-black-100" resizeMode="contain" />
          </View>

          <View className="flex flex-row items-center">
            <Text className="text-[9px] text-white font-psemibold text-start text-bold mt-1 " numberOfLines={1}
              ellipsizeMode="tail">
              {product.title}
            </Text>
          </View>

          <View className="flex flex-col text-white justify-end">
            <Text className="text-[9px] text-white font-pregular">
              {product.rating} <Image source={images.star} className="w-[11px] h-[11px] rounded-md" />
            </Text>
            <Text className="text-[10px] text-white font-pregular pb-1">₹ {product.price}</Text>
          </View>

          {(isCounterVisibleMap[index] || carts.find((item) => item.id === product.id)?.quantity >= 1) ? (
            <Counter
              onClose={() => toggleCounterVisibility(index)}
              product={product}
              quantity={carts.find((item) => item.id === product.id)?.quantity || 0}
              text={buttonText}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                toggleCounterVisibility(index); // Toggle the counter visibility
                addToCart(product); // Add the product to the cart
              }}
              className="bg-yellow-300 w-[90%] rounded-lg h-7 py-1"
            >
              <Text className="text-[12px] text-center font-pbold">{buttonText}</Text>
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