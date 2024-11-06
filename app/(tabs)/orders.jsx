import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ProfileNavbar from '../../components/Profile/ProfileNavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Badge from '../../components/Profile/Badge';
import { StatusBar } from 'expo-status-bar';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { images } from "../../constants"
import { Svg, Defs, Path, Use, G } from 'react-native-svg';

import { wavyData } from '../../constants/products';

const Orders = () => {
    const lineData = [

        {
            value: 20, dataPointText: '20', label: 'M',


        },
        {
            value: 18, dataPointText: '18', label: 'T',


        },
        {
            value: 40, dataPointText: '40', label: 'W'

        },
        {
            value: 36, dataPointText: '36', label: 'T'

        },
        {
            value: 60, dataPointText: '60', label: 'F'
        },
        {
            value: 54, dataPointText: '54', label: 'S'
        },
        {
            value: 70, dataPointText: '85', label: 'S'
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
           
            <ScrollView className="flex w-full  bg-black-100 h-[100%] text-white">

                {/* <Text className="text-white flex text-lg items-start font-psemibold text-left ml-2">Order History</Text>
           <View className="w-full">
              <SmallCardOrder orders={transactionsData} />
            </View>*/}
             <View className="bg-orange-600 h-22">
        <Image
          source={images.orderHead} // Replace with your empty state image
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
          My Orders
        </Text>
      </View>
                    <View className="flex mx-auto px-8  bg-black-100  overflow-hidden rounded-xl items-center w-full justify-center">
                   
                        <BarChart
                            data={lineData}
                            spacing={10}
                            textColor1="white"
                            yAxisThickness={0}
                            xAxisThickness={0}
                            frontColor={'#177AD5'}
                            hideYAxisText
                            hideYAxis
                            hideRules
                            yAxisColor="#ffffff"
                            xAxisColor="#ffffff"
                            color="#ffffff"
                            showLine
                            lineConfig={{
                                color: '#F29C6E',
                                thickness: 3,
                                textFontWeight: 'bold',
                                dataPointsColor: 'white',
                                textFontSize:15,
                                textColor:"white",
                            
                              }}
                            xAxisLabelTextStyle={
                                {
                                    color: 'white',
                                    fontWeight: 'bold',
                                }
                            }
                        />
                    </View>

                
            </ScrollView>
        </SafeAreaView>
    );
}


export default Orders;
