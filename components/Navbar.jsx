import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';

const Navbar = () => {
  return (
    <View className='flex flex-row justify-between items-center'>
      <View className='flex flex-col justify-between '>
        <Text className="text-lg mt-2 ml-3 font-pbold text-blue-400">Hello Kartik,</Text>
        <Text className="text-xs ml-3 font-psemibold text-yellow-400">Have A Nice Day Ahead !</Text>
      </View>
      <Link href="/modal" className=' mt-4 mr-3'>
        <View className='flex border-2 border-yellow-500 rounded-full mt-4 mr-3'>
          <Image
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4i-az-sgn-Dogg2UTH6sMgHaFS%26pid%3DApi&f=1&ipt=86196ef3c123995791c32c54e7c8335925f0e1688d9e5a7660112f24265325b2&ipo=images" }}
            className="w-10 h-10 rounded-full"
          />
        </View>
      </Link>

    </View>
  );
};

export default Navbar;


