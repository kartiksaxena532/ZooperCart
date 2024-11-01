import { SafeAreaView } from 'react-native-safe-area-context'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import useWishlistStore from '../../context/WishlistStore';
import Photo from '../../components/RestList/Image';

const Bookmark = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);

  return (
    <SafeAreaView className="bg-black-100 flex-1 font-pmedium">
      <View className="mx-1 mt-2 mb-12">
        <Text className="text-blue-400 text-lg font-pbold mx-2">Hey Kartik,</Text>
        <Text className="text-xs font-psemibold text-yellow-400 capitalize mx-2">This is your wishlist</Text>
        <FlatList
          data={wishlist}
          keyExtractor={(item, index) => index.toString()} // Use index as a unique key
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <View className="flex flex-row justify-between items-center py-2 px-4 rounded-md">
                <Photo item={item} />
                <View className="flex flex-col justify-between">
                  <View className=" relative w-full h-[17vh]">
                    <Text className="text-white text-lg font-semibold   font-pbold">{item.name}</Text>

                    <Text className="text-white text-md   font-psemibold">Price: ${item.price.toFixed(2)}</Text>
                    <Text className="text-yellow-500 text-md   font-pthin">Rating: {item.rating} ⭐</Text>

                    <View className="flex flex-row justify-between">
                      <Text className="text-white text-sm   font-pthin">North Indian</Text>
                      <Text className="text-yellow-500 text-sm font-pthin">4.5</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                      <Text className="text-white text-sm   font-pthin">Indrapuram</Text>
                      <Text className="text-yellow-500 text-sm  font-pthin">10-20 mins</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <View className="flex justify-center items-center text-center bg-red-500 rounded-full text-md w-[45vw] h-10">
                      <Text className="text-white text-lg font-pbold">Extra {Math.floor(Math.random() * (15 - 5)) + 5}% Off</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}


export default Bookmark;
