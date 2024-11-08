import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ProfileNavbar from '../components/Profile/ProfileNavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Badge from '../components/Profile/Badge';
import { StatusBar } from 'expo-status-bar';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

export default function Modal() {
  const lineData = [
    { value: 0, dataPointText: '0' },
    {
      value: 20, dataPointText: '20', label: 'M', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>10</Text>
      ),
    },
    {
      value: 18, dataPointText: '18', label: 'T', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>9</Text>
      ),
    },
    {
      value: 40, dataPointText: '40', label: 'W', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>15</Text>
      ),
    },
    {
      value: 36, dataPointText: '36', label: 'T', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>14</Text>
      ),
    },
    {
      value: 60, dataPointText: '60', label: 'F', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>20</Text>
      ),
    },
    {
      value: 54, dataPointText: '54', label: 'S', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>18</Text>
      ),
    },
    {
      value: 70, dataPointText: '85', label: 'S', topLabelComponent: () => (
        <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>30</Text>
      ),
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
  ];

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView className="flex flex-col  bg-black-100 h-[100%] px-2 text-white">
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
        </View>
            
      </ScrollView>
    </SafeAreaView>
  );
}


