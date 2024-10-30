import { View, Text ,Image} from 'react-native';

const Navbar = () => {
  return (
    <View  className='flex flex-row justify-between items-center'>
<View className='flex flex-col justify-between '>
<Text className="text-2xl mt-5 ml-3 font-pbold text-blue-400">Hello Kartik,</Text>
<Text className="text-sm ml-3 font-psemibold text-yellow-400">Have A Nice Day Ahead !</Text>
</View>
<View className='flex border-2 border-yellow-500 rounded-full mt-4 mr-3'>
<Image 
  source={{uri: "https://picsum.photos/400"}} 
  className="w-12 h-12 rounded-full"
/>
</View>
</View>
  );
};

export default Navbar;


