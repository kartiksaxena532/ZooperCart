import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProfileNavbar from '../components/Profile/ProfileNavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Badge from '../components/Profile/Badge';
import SmallCardOrder from '../components/Profile/SmallCardOrder';


export default function Modal() {
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
  ];

  return (
    <SafeAreaView className="flex flex-col  bg-black-100 h-[100%] px-2 text-white">
      <ProfileNavbar />
      <View className="flex ">
        <View className="flex mx-auto border-4 border-yellow-500 rounded-full w-[150px] h-[150px] items-center  overflow-hidden" sharedTransitionTag="sharedTag">
          <Image source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4i-az-sgn-Dogg2UTH6sMgHaFS%26pid%3DApi&f=1&ipt=86196ef3c123995791c32c54e7c8335925f0e1688d9e5a7660112f24265325b2&ipo=images" }} className="h-[150px] w-[150px] rounded-full" />
        </View>
        <Text className="font-psemibold text-3xl mx-auto text-white my-2">Kartik Saxena</Text>
        <Text className="font-pregular text-xs text-white my-2 mx-3 text-center">Newly joining the revolution of quickcommerce gives you an unfair advantage over everbody else.</Text>
        <View className="flex flex-row justify-center gap-3 my-2 ">
          <Badge label="Foodie" />
          <Badge label="Premium" />
          <Badge label="Newcomer" />
        </View>
        {/* <Text className="text-white flex text-lg items-start font-psemibold text-left ml-2">Order History</Text>
       <View className="w-full">
          <SmallCardOrder orders={transactionsData} />
        </View>*/}

        
      </View>
    </SafeAreaView>
  );
}


