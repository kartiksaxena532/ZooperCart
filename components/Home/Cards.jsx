import { FlatList, TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import category from "../../constants/category";


const Cards = ({ title }) => {
    const renderItem = ({ item }) => (
        <Link href={`/category/${item.name}`}>
            <View className="flex flex-row justify-center items-center">
                <View className="flex flex-col py-2 ml-2 justify-start bg-transparent h-[20vh] w-[26vw] rounded-xl">
                    <View className="shadow-md border-[0.5px] border-white shadow-yellow-600 rounded-2xl">
                        <View className="flex flex-col justify-center">
                            <Text
                                className="text-[14px] text-white font-psemibold text-center mt-1"
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {item.name}
                            </Text>
                            <Text
                                className="text-[11px] text-white font-psemibold text-center "
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {item.name}
                            </Text>
                        </View>
                        <Image source={{ uri: item.image }} className="w-full h-[70px] rounded-2xl ring-2 ring-slate-500" />
                    </View>
                </View>
            </View>
        </Link>

    );

    return (
        <View className="flex flex-col">
            <Text className="text-[18px] text-white text-start capitalize mx-3 my-2 font-psemibold">{title}</Text>
            <ScrollView>
                <FlatList
                    data={category}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
};

export default Cards