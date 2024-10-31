import { View, ScrollView, Text ,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../../components/Search';
import HugeList from '../../components/HugeList';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import HugeListSmall from '../../components/HugeListSmall';

const Home = () => {
  return (
    <SafeAreaView className="bg-black-100 flex-1 font-pmedium">
     <Navbar/>
      <Search />
      <ScrollView>
        <HugeList title="Try our Latest collection!" buttonText="Buy Now" />
        <Banner />
        <HugeList title="Some Popular Products" buttonText="Explore" />
        <HugeListSmall title="Choose From Our Featured Categories" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
