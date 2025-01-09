import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, ActivityIndicator, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Loader from '../../components/Video/Loader';


const Category = () => {
  const { slug } = useLocalSearchParams();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
        const data = await res.json();

        if (data && data.products && data.products.length > 0) {
          setCategory(data.products);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching category:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [slug]);

  if (loading) {
    return (
      <SafeAreaView className="bg-black-100 h-full w-full flex items-center justify-center">
        <Loader/>
      </SafeAreaView>
    );
  }

  if (error || category.length === 0) {
    return (
      <SafeAreaView className="bg-black-100 h-full w-full flex items-center justify-center">
        <Text className="text-white text-lg">Category not found</Text>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }) => (
    <View className="flex flex-row items-center px-4 py-2">
      <Image 
        source={{ uri: item.thumbnail || 'https://via.placeholder.com/50' }} 
        className="w-[70px] h-[70px] rounded-full bg-white"
        resizeMode="cover"
      />
      <View className="ml-3 mt-2 w-[82%]">
        <Text className="text-xl text-white font-psemibold capitalize">{item.title}</Text>
        <Text className="text-md text-gray-400 font-pregular capitalize">{item.sku}</Text>
        <Text className="text-sm text-green-400 font-pregular capitalize">{item.availabilityStatus}</Text>
        <View className="flex flex-row justify-between w-[85%]">
        <Text className="text-sm text-yellow-600 font-psemibold capitalize">${item.price}</Text>
        <Text className="text-xs text-red-400 font-pregular capitalize">sale {item.discountPercentage}% off</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="bg-black-100 h-full w-full">
      <StatusBar backgroundColor="#ffffff" />
      
      {/* Navbar */}
      <View className="h-[6vh] items-start flex-row justify-between bg-white px-4">
        <Link href="/home" className='relative mt-2'>
          <AntDesign name="arrowleft" size={30} color="black" />
        </Link>
        <Link href="/cart" className='relative mt-4'>
          <FontAwesome6 name="basket-shopping" size={24} color="black" />
        </Link>
      </View>

      {/* Category Header */}
      <View className="flex items-center">
        <View className="border-red-600 rounded-b-3xl bg-white h-[200px] w-full">
          <Text className="text-5xl text-black-200 font-pbold -mb-8 pt-3 capitalize text-center" numberOfLines={1}>
            {category[0]?.category || 'Category'}
          </Text>
          <Image 
            source={{ uri: category[1]?.thumbnail || 'https://via.placeholder.com/300' }} 
            className="rounded-b-xl w-full -mt-7 h-[180px]"
            resizeMode='contain' 
          />
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={category}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 15 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Category;
