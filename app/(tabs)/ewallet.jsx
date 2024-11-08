import { SafeAreaView } from 'react-native-safe-area-context'
import { View, FlatList, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import useWishlistStore from '../../context/WishlistStore';
import Photo from '../../components/RestList/Image';
import { images } from "../../constants"
import { Svg, Defs, Path, Use, G } from 'react-native-svg';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CardContainer from '../../components/EwalletCard/CardContainer';
import SmallCard from '../../components/EwalletCard/SmallCard';
import { wavyData } from '../../constants/products';


const Ewallet = () => {
  const data = [
    {
      index: 10,
      image: require('../../assets/amex.png'),
      bgvalue: "bg-blue-500",
      name: "Kartik Saxena",
      number: "7587 8845 12331",
      cardname: "American Express",
      year: "01 / 1995"


    },
    {
      index: 11,
      image: require('../../assets/visa.png'),
      bgvalue: "bg-yellow-600",
      name: "Kartik Saxena",
      number: "7587 8845 12331",
      cardname: "Visa Rupay",
      year: "04 / 1998"
    },
    {
      index: 12,
      image: require('../../assets/master.png'),
      bgvalue: "bg-gray-500",
      name: "Kartik Saxena",
      number: "8587 2945 12331",
      cardname: "MasterCard",
      year: "07 / 1996"
    }
  ];

  const transactionsData = [
    { id: 1, date: '2024-11-01', amount: 120.5, description: 'Grocery Shopping', type: 'debit', cardname: 'MasterCard' },
    { id: 2, date: '2024-11-02', amount: 500.0, description: 'Salary', type: 'credit', cardname: 'Visa' },
    { id: 3, date: '2024-11-03', amount: 30.75, description: 'Coffee Shop', type: 'debit', cardname: 'MasterCard' },
    { id: 4, date: '2024-11-01', amount: 120.5, description: 'Grocery Shopping', type: 'debit', cardname: 'AMEX' },
    { id: 5, date: '2024-11-02', amount: 500.0, description: 'Salary', type: 'credit', cardname: 'Visa' },
    { id: 6, date: '2024-11-03', amount: 30.75, description: 'Coffee Shop', type: 'debit', cardname: 'MasterCard' },
    { id: 7, date: '2024-11-01', amount: 120.5, description: 'Grocery Shopping', type: 'debit', cardname: 'Visa' },
    { id: 8, date: '2024-11-02', amount: 500.0, description: 'Salary', type: 'credit', cardname: 'MasterCard' },
    { id: 9, date: '2024-11-03', amount: 30.75, description: 'Coffee Shop', type: 'debit', cardname: 'AMEX' },
    // Add more transactions as needed
  ];

  return (
    <View className="bg-black-100 flex-1 font-pmedium">
       <View className="bg-green-500 h-10  w-full"></View>
      <View className="bg-green-500 h-22">
        <Image
          source={images.wishlistHead} // Replace with your empty state image
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
          My Wallet
        </Text>
      </View>
      <GestureHandlerRootView style={{ flex: 0.5 }}>
        <SafeAreaView className="flex items-center mt-5">
          <CardContainer data={data} maxVisibleItems={3} />
        </SafeAreaView>
      </GestureHandlerRootView>
      <TouchableOpacity>
        <Text className="text-md text-blue-300 text-center -mt-8 font-pregular">Add A Card</Text>
      </TouchableOpacity>
      <View className="flex-[0.6] ">
        <Text className="text-white text-lg ml-3 font-pmedium text-left ">Transaction History</Text>
        <View className="px-2 mb-20">
          <SmallCard transactions={transactionsData} />
        </View>
      </View>
    </View>
  );
}


export default Ewallet;
