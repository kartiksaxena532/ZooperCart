import { StatusBar } from 'expo-status-bar';
import { Text, View ,ScrollView ,Image} from "react-native"
import { SafeAreaView} from 'react-native-safe-area-context';
import {images} from "../constants"
import CustomButton from '../components/CustomButton';
import { Redirect,router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView className="bg-black-100 h-full">
 
<View className="w-full justify-center items-center min-h-[90vh] px-4">
<Image source={images.logo} className="w-[70px] h-[70px]" resizeMode='contain'/>
<View className="flex-row">
<Text className="text-4xl text-yellow-300 font-pbold">Zooper</Text>
<Text className="text-4xl text-blue-300 font-pbold">Cart</Text>
</View>
<Image source={images.cards} className="w-full h-[45vh] rounded-full " resizeMode='cover'/>
<View className="relative">
<Text className="text-2xl text-white font-pextrabold text-center">Welcome to <Text className=" text-blue-300">Zooper</Text></Text>
<Text className="text-xl text-white font-psemibold text-center capitalize">Shop the vibe,<Text className="text-yellow-300 capitalize">own the hype.</Text></Text>
<Image source={images.path} className="w-[100px] h-[20px] absolute -bottom-3 right-8" resizeMode='contain'/>

</View>
<View className="mt-6">
<Text className="text-md text-slate-100 font-pregular text-center px-4">Where you can buy your favourites with the best quality and price.</Text>
</View>
<CustomButton title="Continue"
handlePress={()=>router.push('/home')}
containerStyle="w-full mt-7"
/>
</View>

     <StatusBar backgroundColor='#161622'  style="light"/>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

