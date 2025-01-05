
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HugeListSmall = ({ title }) => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch category list
        const res = await fetch('https://dummyjson.com/products/categories');
        const categoryList = await res.json();

        // Fetch category details for each category, including thumbnail
        const categoryData = await Promise.all(
          categoryList.map(async (category) => {
            // Fetch detailed category data using the URL

            const categoryDetailsRes = await fetch(`https://dummyjson.com/products/category/${category.slug}`);
            const categoryDetails = await categoryDetailsRes.json();

            // Assuming that categoryDetails contains a list of products
            const categoryThumbnail = categoryDetails.products && categoryDetails.products[0] ? categoryDetails.products[1].thumbnail : null;

            // Return data including name, slug, and thumbnail (if available)
            // Return data including name, slug, and thumbnail
            return {
              slug: category.slug,
              name: category.name,
              thumbnail: categoryThumbnail,  // Access thumbnail here
            };
          })
        );

        // Update the categories state with the fetched data
        setCategories(categoryData);

        console.log("Fetched categories:", categoryData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <Link href={`/category/${item.slug}`}>
      <View className="flex flex-row justify-center items-center">
        <View className="flex flex-col py-2 ml-2 justify-start bg-transparent h-[15vh] w-[22vw] rounded-md">
          <View className="shadow-md border-[0.5px] border-white shadow-yellow-600 rounded-md">
            <Image
              source={{ uri: item.thumbnail }}
              className="w-full h-[90px] rounded-md ring-2 bg-white ring-slate-500"
              resizeMode="cover"
            />
          </View>
          <View className="flex flex-row justify-center">
            <Text
              className="text-[11px] text-white font-psemibold text-center mb-14"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    </Link>
  );


  return (
    <View className="flex flex-col">
      <Text className="text-[18px] text-white text-start capitalize mx-3 font-psemibold">{title}</Text>
      <ScrollView>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.slug}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default HugeListSmall;
