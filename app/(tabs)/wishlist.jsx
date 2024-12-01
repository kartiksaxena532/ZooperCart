import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import useWishlistStore from '../../context/WishlistStore';
import useProductStore from '../../context/useProductStore';
import useCartStore from '../../context/useCartStore';
import Photo from '../../components/RestList/Photu';
import { images } from "../../constants";
import { StatusBar } from 'expo-status-bar';
import { Svg, Defs, Path, Use, G } from 'react-native-svg';

import { wavyData } from '../../constants/products';

const Wishlist = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const { products, loading, error, fetchProducts } = useProductStore();
  const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart, carts } = useCartStore();

  return (
    <>
      <View className="bg-red-500 h-10  w-full"></View>
    <View className="bg-black-100 flex-1 font-pmedium">
      
      {/* Fixed Header */}
      <View className="bg-red-500 mb-4">
        <Image
          source={images.like} // Replace with your empty state image
          className="w-[45px] h-[45px] flex mx-auto mt-1"
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
            <Use href="#wave" y="320" />
          </G>
        </Svg>
        <Text className="text-md font-pbold text-center mb-4 text-red-50 capitalize mx-2">
          My wishlist
        </Text>
      </View>

      {/* Conditional Rendering based on Wishlist */}
      {wishlist.length === 0 ? (
        <View className="flex justify-center h-[70%] items-center">
          <Image
            source={images.cartEmpty}
            className="w-[200px] h-[200px] opacity-40"
            resizeMode="contain"
          />
          <Text className="text-xl mx-2 text-gray-500 capitalize font-psemibold">
            uHHH Let's chill !
          </Text>
          <Text className="text-md mx-2 text-gray-500 capitalize font-pregular">
            Would you like to add something ?
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
                <View className="w-full h-[9vh]">
                  <Text className="text-white text-md font-semibold font-pbold">
                    {item.name}
                  </Text>
                  <Text className="text-white text-sm font-psemibold">
                    Price: ${item.price.toFixed(2)}
                  </Text>
                  <Text className="text-yellow-500 text-xs font-pthin">
                    Rating: {item.rating} ⭐
                  </Text>
                </View>
                <TouchableOpacity>
                  <View className="flex justify-center items-center text-center bg-red-500 rounded-full text-md w-[40vw] h-8">
                    <Text className="text-white text-xs font-pbold">
                     Add To Cart
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
    </>
  );
};

export default Wishlist;
