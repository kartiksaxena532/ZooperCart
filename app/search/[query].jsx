import { useLocalSearchParams,Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity,StatusBar,ScrollView ,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import  Search from "../../components/Search";


export default function SearchPage() {
  const { query } = useLocalSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await res.json();
      setResults(data.products);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!results.length) return <Text>No products found for "{query}"</Text>;

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#1e1e2d"/>
      <TouchableOpacity className=" pl-2 h-[6vh] items-start flex  bg-black-100">
      <Link href="/home" className='h-10  w-10'>
        <Image source={images.back} className="h-8 w-8" />
      </Link>
    
    </TouchableOpacity>
    <View className="h-[6vh] bg-black-100 px-4">
      <Search/>
      </View>
      <View className="flex flex-col  bg-black-100 h-[100%] px-6 py-4 text-white">
      <Text className="text-white font-psemibold text-xl">Results for "{query}"</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex flex-row text-white my-2 py-2 rounded-2xl" >
            <View className="flex flex-row ">
            <Image src={item.thumbnail} className="w-14 h-14 mr-3" />
            </View>
            <View className="flex align-center justify-center">
            <Link className="text-white text-md font-pregular" href={`/product/${item.id}`}>{item.title}</Link>
            <Text className="text-gray-400 text-xs font-pregular">${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
