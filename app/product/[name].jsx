 import { Link, useLocalSearchParams } from 'expo-router'
import { View, Text ,Image,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileNavbar from '../../components/Profile/ProfileNavbar';
import products from '../../constants/products';

 
 const Products = () => {
const {name} = useLocalSearchParams();
const product = products.find((p) => p.name.toString() === name); 

if (!product) {
  return <Text>Product not found</Text>;
}
   return (
     <SafeAreaView className="bg-black-100 h-full w-full px-2 justify-around">
      <ProfileNavbar/>
      <View className="border-2 border-white rounded-lg">
      <Image source={product.image} className="w-full h-[30vh] border-2 border-white rounded-lg" />
      </View>
       <Text className="text-2xl text-white font-psemibold text-center ">{product.name}</Text>
       <View className="flex flex-row justify-around">
       <Text className="text-lg text-white font-psemibold text-center ">Reviews: {product.rating} ⭐</Text>
       <Text className="text-lg text-white font-psemibold text-center " >Price : $ {product.price}</Text>
       </View>
       <Text className="text-sm text-white font-pregular text-justify " >{product.description}</Text>
       <Link href="/cart" className="w-full text-lg text-center text-black font-pbold bg-yellow-400 rounded-xl py-4 my-4">Proceed To Buy</Link>
     </SafeAreaView>
   )
 }
 
 export default Products;