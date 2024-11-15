//rnfes react native function component in style basically stylesheet wala component snippet
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();





const RootLayout = () => {


  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),

  })


  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (

    <Stack>

      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerShown: false
        }}
      />
      <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="category/[name]" options={{ headerShown: false }} />
      <Stack.Screen name="(card)/addCard" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout