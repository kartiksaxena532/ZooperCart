import { useLocalSearchParams,Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

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
    <View style={styles.container}>
      <Text style={styles.heading}>Results for "{query}"</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Link href={`/product/${item.id}`}>{item.title} - ${item.price}</Link>
          </TouchableOpacity>
        )}
      />
    </View>
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
