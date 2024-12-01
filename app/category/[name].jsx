import { Link, useLocalSearchParams } from 'expo-router'
import { View, Text ,Image,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileNavbar from '../../components/Profile/ProfileNavbar';
import categoryData from '../../constants/category';
 
const Category = () => {
  
    const { name } = useLocalSearchParams();
    const selectedCategory = categoryData.find((c) => c.name.toString() === name); 
    
    if (!selectedCategory) {
      return <Text>Category not found</Text>;
    }
  
    return (
      <SafeAreaView className="bg-black-100 h-full w-full px-2">
        <ProfileNavbar />
        <View className=" flex items-center ">
        <View className="border-2 border-white rounded-lg h-[100px] w-[100px]">
          <Image source={selectedCategory.image} className=" border-2 border-white rounded-lg" />
        </View>
        <Text className="text-2xl text-white font-psemibold text-center ">{selectedCategory.name}</Text>
        <Link href="/cart" className="w-full text-lg text-center text-black font-pbold bg-yellow-400 rounded-xl py-4 my-4">Proceed To Buy</Link>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Category;