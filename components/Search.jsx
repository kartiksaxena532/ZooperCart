import { View,Text,Image } from "react-native"
import FormField from "./FormField"
import {images} from "../constants"

const Search = () => {
  return (
    <View className="flex flex-row items-center justify-around px-2 -mt-8">
        <FormField 
            label="Search"
            placeholder="Search"
            name="search"
            type="text"
            otherStyles="w-[82vw] flex mb-2 rounded-full"
            />
<Image source={images.search} className="w-[30px] h-[30px] mt-10" resizeMode='contain'/>
    </View>
  )
}

export default Search