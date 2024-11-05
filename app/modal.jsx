import { Link,  router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import ProfileNavbar from '../components/Profile/ProfileNavbar';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    < SafeAreaView className="flex flex-col w-full bg-black-100 h-full px-2 text-white">
        <View>
        <ProfileNavbar/>
        </View>
        <Text className="text-white text-2xl font-psemibold">Profile Screen</Text>
        <View className="flex flex-row justify-center gap-3">
      <View className="text-yellow-200 border-2  flex items-center justify-center py-1 px-3 rounded-full border-yellow-300 ">
      <Text className="text-yellow-200 text-xs  font-pregular">Foodie</Text>
      </View>
      <View className="text-yellow-200 border-2 flex items-center justify-center py-1 px-3 rounded-full border-yellow-300  ">
      <Text className="text-yellow-200 text-xs  font-pregular">Premium</Text>
      </View>
      <View className="text-yellow-200 border-2 flex items-center justify-center py-1 px-2 rounded-full border-yellow-300">
      <Text className="text-yellow-200 text-xs  font-pregular">Newcomer</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}


