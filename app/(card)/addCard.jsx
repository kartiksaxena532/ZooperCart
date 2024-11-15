import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import FormField from '../../components/FormField';
import { SafeAreaView } from 'react-native-safe-area-context';
const addCard = () => {

    return (
        <SafeAreaView className="flex justify-center h-full bg-black-100 items-center  ">
            <Text className="text-white text-lg font-psemibold">Add A Card</Text>
            <View className="flex w-full  items-center">
            <FormField 
          label="Search"
          placeholder={"Add Name"}
          name="search"
          type="text"
          otherStyles="w-[82vw] rounded-full"
          style={{  flex: 1 }}
        />

<FormField 
          label="Search"
          placeholder={"Add Name"}
          name="search"
          type="text"
          otherStyles="w-[82vw]  rounded-full"
          style={{  flex: 1 }}
        />
              <FormField 
          label="Search"
          placeholder={"Add Name"}
          name="search"
          type="text"
          otherStyles="w-[82vw]  rounded-full"
          style={{  flex: 1 }}
        />
              <FormField 
          label="Search"
          placeholder={"Add Name"}
          name="search"
          type="text"
          otherStyles="w-[82vw]  rounded-full"
          style={{  flex: 1 }}
        />
            
            <TouchableOpacity className="w-full text-center justify-center flex items-center">
                <Text className="py-3 bg-yellow-400 rounded-lg text-black px-4 font-psemibold text-md">Submit</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default addCard;