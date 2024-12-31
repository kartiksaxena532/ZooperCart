import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ProfileNavbar from '../components/Profile/ProfileNavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Badge from '../components/Profile/Badge';
import { StatusBar } from 'expo-status-bar';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { images } from '../constants';

export default function Modal() {
 
  return (
    <SafeAreaView>
   <StatusBar backgroundColor="#1e1e2d"/>
      <ScrollView className="flex flex-col  bg-black-100 h-[100%] px-2 text-white">
        <ProfileNavbar />
        <View className="flex">
          <View className="flex mx-auto border-4 border-yellow-500 rounded-full w-[150px] h-[150px] items-center  overflow-hidden" sharedTransitionTag="sharedTag">
            <Image source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4i-az-sgn-Dogg2UTH6sMgHaFS%26pid%3DApi&f=1&ipt=86196ef3c123995791c32c54e7c8335925f0e1688d9e5a7660112f24265325b2&ipo=images" }} className="h-[150px] w-[150px] rounded-full" />
          </View>
          <Text className="font-psemibold text-3xl mx-auto text-white my-2">Kartik Saxena</Text>
          <Text className="font-pregular text-xs text-white my-2 mx-3 text-center">Joined 2023</Text>
          <Text className="font-pregular text-xs text-white my-2 mx-3 text-center">Newly joining the revolution of quick-commerce gives you an unfair advantage over everbody else.</Text>
          <View className="flex flex-row justify-evenly my-2 ">
            <Badge label="Foodie" />
            <Badge label="Premium" />
            <Badge label="Newcomer" />
          </View>
          {/* <Text className="text-white flex text-lg items-start font-psemibold text-left ml-2">Order History</Text>
       <View className="w-full">
          <SmallCardOrder orders={transactionsData} />
        </View>
          <View className="flex flex-wrap flex-col justify-between gap-4 my-4 w-[100%]">
            {/* Row 1: Bar Chart and Line Chart 
            <View className="flex-1 bg-sky-100 py-4 overflow-hidden rounded-xl items-center justify-center">
              <Text className="text-md font-psemibold">Orders</Text>
              <BarChart
                initialSpacing={-15}
                data={lineData}
                spacing={10}
                textColor1="yellow"
                textShiftY={-8}
                textShiftX={-10}
                textFontSize={13}
                thickness={10}
                hideYAxisText
                yAxisColor="#0BA5A4"
                showVerticalLines
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="#0BA5A4"
                color="#0BA5A4"
              />
            </View>
            <View className="flex-1 bg-green-300 py-5 rounded-xl items-center overflow-hidden justify-center">
              <Text className="text-md font-psemibold">Avg Order Price</Text>
              <LineChart
                initialSpacing={0}
                data={lineData}
                spacing={41}
                textColor1="white"
                textShiftY={-8}
                textShiftX={-10}
                textFontSize={13}
                thickness={10}
                hideYAxisText
                yAxisColor="#0BA5A4"
                showVerticalLines
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="#0BA5A4"
                color="#ffffff"
              />
            </View>
        
          </View>
        
          */}
            <View className="border-[3px] border-gray-800 rounded-xl mt-4 py-4 ">
          <View className="flex justify-center items-center mx-3 border-b-[1px] mb-2 border-gray-800">
            <View className="flex flex-row items-center justify-between w-full  px-2 py-4 rounded-[12px]">
            <Image source={images.logo} className="w-10 h-10 rounded-full" /> 
            <Text className="font-psemibold  text-white text-lg ">Address</Text>
            <Image source={images.downArrow} className="w-6 h-6 rounded-full -rotate-90" />
            </View>
          </View>


          <View className="flex justify-center items-center mx-3 border-b-[1px]  border-gray-800">
            <View className="flex flex-row items-center justify-between w-full px-2 py-4 rounded-[12px]">
            <Image source={images.logo} className="w-10 h-10 rounded-full" /> 
            <Text className="font-psemibold  text-white text-lg">Settings</Text>
            <Image source={images.downArrow} className="w-6 h-6 rounded-full -rotate-90" />
            </View>
          </View>

          <View className="flex justify-center items-center mx-3 border-b-[1px] my-2 border-gray-800">
            <View className="flex flex-row items-center justify-between w-full  px-2 py-4 rounded-[12px]">
            <Image source={images.logo} className="w-10 h-10 rounded-full" /> 
            <Text className="font-psemibold  text-white text-lg ">Terms and Conditions</Text>
            <Image source={images.downArrow} className="w-6 h-6 rounded-full -rotate-90" />
            </View>
          </View>

          <View className="flex justify-center items-center mx-3 mt-2 border-gray-800">
            <View className="flex flex-row items-center justify-between w-full  px-2 py-2 rounded-[12px]">
            <Image source={images.logo} className="w-10 h-10 rounded-full" /> 
            <Text className="font-psemibold  text-white text-lg ">Referal Program</Text>
            <Image source={images.downArrow} className="w-6 h-6 rounded-full -rotate-90" />
            </View>
          </View>
          </View>
        </View>
            
      </ScrollView>
    </SafeAreaView>
  );
}


