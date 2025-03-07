import { Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons ,images} from '../../constants'


const TabIcon = ({ icon, color, name, focused, height }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className={`w-${height} h-${height}`}
      />
      <Text className={`${focused ? 'font-psemibold' : "font-pregular"} text-[12px] text-white`}>{name}</Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fdd339',
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#1e1e2d',
          borderTopWidth: 2,
          height: 60,
          borderTopColor: "#232533",
        },
      }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
                height={6}
              />
            )

          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "Wishlist",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Wishlist"
                focused={focused}
                height={6}
              />
            )

          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.cart}
                color={color}
                name="Cart"
                focused={focused}
                height={6}
              />
            )

          }}
        />
        <Tabs.Screen
          name="ewallet"
          options={{
            title: "EWallet",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.wallet}
                color={color}
                name="Wallet"
                focused={focused}
                height={6}
              />
            )

          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.order}
                color={color}
                name="Orders"
                focused={focused}
                height={6}
              />
            )

          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

