import { View, FlatList,Text,Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../../components/Search';
import HugeList from '../../components/HugeList';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import HugeListSmall from '../../components/HugeListSmall';
import HugeListDouble from '../../components/HugeListDouble';
import RestList from '../../components/RestList/RestList';
import AdBanner from '../../components/AdBanner/AdBanner';
import { StatusBar } from 'expo-status-bar';
import {images} from '../../constants';


const Home = () => {
  const data = [
    { key: 'navbar', component: <Navbar /> },
    { key: 'search', component: <Search /> },
    { key: 'hugeList', component: <HugeList title="Try our Latest collection!" buttonText="Add to cart" /> },
    { key: 'banner', component: <Banner /> },
    { key: 'hugeListDouble', component: <HugeListDouble title="Some Popular Products" buttonText="Add Now" /> },
    { key:'adbanner1', component:<AdBanner imageSource={images.banner1} />},
    { key: 'hugeListSmall', component: <HugeListSmall title="Featured Categories" /> },
    { key:'adbanner2', component:<AdBanner imageSource={images.banner2} />},
    { key: 'restList', component: <RestList /> },
    { key:'adbanner3', component:<AdBanner imageSource={images.banner3} />},
  ];

  const renderItem = ({ item }) => <View>{item.component}</View>;

  return (
    <View className="bg-black-100 flex-1 font-pmedium">
       <View className="bg-black-100 h-10 w-full"></View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Home;
