import { SafeAreaView } from 'react-native-safe-area-context'
import { View, FlatList, Text, Image, TouchableOpacity,ScrollView ,Button} from 'react-native';
import Photo from '../../components/RestList/Image';
import { images } from "../../constants";
import { StatusBar } from 'expo-status-bar';
import {Svg,Defs ,Path ,Use, G} from 'react-native-svg';
import useCartStore from '../../context/CartStore';
import { wavyData } from '../../constants/products';

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  
  return (
    <>
    <View className="bg-blue-500 h-10  w-full"></View>
    <View className="bg-black-100 flex-1 font-pmedium">
    {/* Fixed Header */}
    <View className="bg-blue-500 mb-4">
      <Image 
        source={images.cart3d} // Replace with your empty state image
        className="w-[45px] h-[45px] flex mx-auto -rotate-45 mt-1  "
        resizeMode="contain"
      />
       <Svg 
    width="100%"
    height="60%"
    fill="#1e1e2d"
    viewBox='10 0 800 1000'
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
      <Text className="text-md font-psemibold text-center mb-4 text-red-50 capitalize mx-2">
        My Cart
      </Text>
    </View>

    {/* Conditional Rendering based on Wishlist */}
    {cart.length === 0 ? (
      <View className="flex justify-center h-[70%] items-center">
        <Image 
          source={images.emptyWishlist}
          className="w-[200px] h-[200px] opacity-40"
          resizeMode="contain"
        />
        <Text className="text-xl mx-2 text-gray-500 capitalize font-psemibold">
          Opps its empty!
        </Text>
        <Text className="text-md mx-2 text-gray-500 capitalize font-pregular">
          We've got you covered
        </Text>
      </View>
    ) : (
      // Scrollable FlatList below the fixed header
 
      cart.map((item) => (
        <View key={item.image} className="flex justify-center items-center mt-5">
          <View className="flex justify-around w-full flex-row items-center">
          <View className="border-2 border-white rounded-2xl">
        <Image source={{ uri: item.image }} className="w-[150px] h-[80px] rounded-2xl" />
        </View>
        <View className="flex flex-col">
          <Text className="text-xl text-white font-psemibold">{item.name}</Text>
          <Text className="text-md text-white font-pregular">Quantity: {item.count}</Text>
          <View className="flex flex-row gap-3">
          <TouchableOpacity className="w-20 h-10 flex text-center justify-center rounded-full items-center bg-red-400" onPress={() => removeFromCart(item)}><Text className=" text-white font-pregular">Remove</Text></TouchableOpacity>
          <TouchableOpacity className="w-7 h-10 flex text-center justify-center items-center rounded-md bg-yellow-400"
            onPress={() => updateItemQuantity(item, item.count + 1)}
           ><Text className="font-pbold">+</Text></TouchableOpacity>
          <TouchableOpacity
          className="w-7 h-10 flex text-center justify-center items-center rounded-md bg-yellow-400"
            onPress={() => updateItemQuantity(item, item.count - 1)}
            ><Text className="font-pbold ">-</Text></TouchableOpacity>
            </View>
          </View>
          </View>
        </View>
      ))

    )}
   
  </View>
  </>
  )
}

export default Cart;