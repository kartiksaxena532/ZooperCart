import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const ProfileNavbar = () => {
  return (
    <View >
       <Link href="/home">
          <Text className="text-2xl font-pregular text-white">Go back</Text>
        </Link>
    </View>
  )
}

export default ProfileNavbar

