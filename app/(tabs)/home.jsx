import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../../components/Search'
import HugeList from '../../components/HugeList'
const Home = () => {
  return (
    <SafeAreaView className='bg-black-100 font-pmedium h-[100%]'>
      <Text className="text-xl mt-5 ml-3 font-pmedium text-blue-400">Hello Kartik,</Text>
      <Text className="text-sm ml-3 font-pregular text-yellow-400">May You Have A Nice Day</Text>
      <Search />
      <HugeList/>
    </SafeAreaView>
  )
}

export default Home