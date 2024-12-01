import { Link, useLocalSearchParams } from 'expo-router'
import { View, Text, Image, Button, ActivityIndicator, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileNavbar from '../../components/Profile/ProfileNavbar';
import useProductStore from '../../context/useProductStore';
import useCartStore from '../../context/useCartStore';
import { useEffect } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { images, icons } from '../../constants'


const Products = () => {

  const { id } = useLocalSearchParams();
  const { products, loading, error, fetchProducts } = useProductStore();
  const { addToCart,getTotalQuantity } = useCartStore();
  const TotalQuantity = getTotalQuantity(); 
  // Fetch products if not already loaded
  useEffect(() => {
    if (!products || products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  // Handle loading state
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Handle error state
  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Find the product by ID
  const product = products.find((p) => p.id.toString() === id);


  return (
    <ScrollView className="bg-black-100 h-full w-full pt-8 ">
      <StatusBar style="light" />
      <View className="h-4 w-4 bg-red-600 absolute right-3 top-4 rounded-full items-center justify-center z-[99]">
        <Text className="text-white font-pbold text-[10px]">
          {TotalQuantity}</Text></View>
      <View className=" h-[6vh] items-start flex-row justify-between bg-white px-4 ">
        <Link href="/home" className='relative mt-4' >
          <AntDesign name="arrowleft" size={30} color="black" />
        </Link>
        <Link href="/cart" className='relative mt-4'>

          <FontAwesome6 name="basket-shopping" size={24} color="black" />
        </Link>
      </View>
      <View className=" rounded-lg w-[full] items-center">
        <Image source={{ uri: product.thumbnail }} className="w-[100vw] h-[35vh] rounded-b-3xl bg-white " resizeMode='contain' />
        <View className="bg-yellow-300 rounded-full w-14 h-14 items-center justify-center absolute right-4 -bottom-5">
          <Image source={images.heart} className="w-[8vw] h-[4vh] " />
        </View>

      </View>

      <SafeAreaView className=" px-4">

        <Text className="text-xl text-white font-pregular text-left ">{product.title}</Text>
        < View className="gap-4">
          <View className="flex flex-col">
            <Text className="text-lg text-white font-pthin text-left my-2" >Price : Rs. {product.price}</Text>
            <Text className="text-sm text-white/70 font-pregular text-left my-2 ">{product.rating} ⭐ Rating On This Product</Text>
          </View>
          <View className="flex flex-row  justify-evenly">
            <Text className="text-xs text-white font-pthin text-left ">{product.shippingInformation}</Text>
            <Text className="text-xs text-white font-pthin text-left " >Stock : {product.stock} units</Text>
          </View>
        </View>
        <Link href="/cart" className="w-full text-lg text-center text-black font-pbold bg-yellow-400 rounded-xl py-4 my-4 " onPress={() => {
          addToCart(product);
        }}>
          <Text className="text-psemibold">Proceed To Buy</Text></Link>

        <Text className="text-sm text-white font-pthin text-justify my-4" >{product.description}</Text>

      </SafeAreaView>
    </ScrollView>
  )
}

export default Products;