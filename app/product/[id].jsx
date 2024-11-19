import { Link, useLocalSearchParams } from 'expo-router'
import { View, Text, Image, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileNavbar from '../../components/Profile/ProfileNavbar';
import useProductStore from '../../context/useProductStore';
import useCartStore from '../../context/useCartStore';
import { useEffect } from 'react';

const Products = () => {

  const { id } = useLocalSearchParams();
  const { products, loading, error, fetchProducts } = useProductStore();
  const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart, carts } = useCartStore();
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
    <SafeAreaView className="bg-black-100 h-full w-full px-2 justify-around">
      <ProfileNavbar />
      <View className="border-2 border-white rounded-lg">
        <Image source={{ uri: product.thumbnail }} className="w-full h-[30vh] border-2 border-white rounded-lg" />
      </View>
      <Text className="text-2xl text-white font-psemibold text-center ">{product.title}</Text>
      <View className="flex flex-row justify-around">
        <Text className="text-lg text-white font-psemibold text-center ">Reviews: {product.rating} ⭐</Text>
        <Text className="text-lg text-white font-psemibold text-center " >Price : $ {product.price}</Text>
      </View>
      <Text className="text-sm text-white font-pregular text-justify " >{product.description}</Text>
      <Link href="/cart" className="w-full text-lg text-center text-black font-pbold bg-yellow-400 rounded-xl py-4 my-4 " onPress={() => {
          addToCart(product);
        }}>
        <Text className="text-psemibold">Proceed To Buy</Text></Link>
    </SafeAreaView>
  )
}

export default Products;