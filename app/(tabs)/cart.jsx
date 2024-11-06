import { SafeAreaView } from 'react-native-safe-area-context'
import { View, FlatList, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import useWishlistStore from '../../context/WishlistStore';
import Photo from '../../components/RestList/Image';
import { images } from "../../constants";
import { StatusBar } from 'expo-status-bar';
import {Svg,Defs ,Path ,Use, G} from 'react-native-svg';

import { wavyData } from '../../constants/products';

const Cart = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);

  return (
    <SafeAreaView className="bg-black-100 flex-1 font-pmedium">
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
    {wishlist.length === 0 ? (
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
      <FlatList
        data={wishlist}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-between items-center py-3 px-4 rounded-md">
            <Photo item={item} />
            <View className="flex flex-col justify-between">
              <View className="w-full h-[17vh]">
                <Text className="text-white text-lg font-semibold font-pbold">
                  {item.name}
                </Text>
                <Text className="text-white text-md font-psemibold">
                  Price: ${item.price.toFixed(2)}
                </Text>
                <Text className="text-yellow-500 text-md font-pthin">
                  Rating: {item.rating} ⭐
                </Text>
                <View className="flex flex-row justify-between">
                  <Text className="text-white text-sm font-pthin">North Indian</Text>
                  <Text className="text-yellow-500 text-sm font-pthin">4.5</Text>
                </View>
                <View className="flex flex-row justify-between">
                  <Text className="text-white text-sm font-pthin">Indrapuram</Text>
                  <Text className="text-yellow-500 text-sm font-pthin">10-20 mins</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View className="flex justify-center items-center text-center bg-red-500 rounded-full text-md w-[45vw] h-10">
                  <Text className="text-white text-lg font-pbold">
                    Extra {Math.floor(Math.random() * (15 - 5)) + 5}% Off
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    )}
  </SafeAreaView>
  )
}

export default Cart;