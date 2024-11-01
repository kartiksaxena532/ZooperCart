import { View, Text } from 'react-native'
import React from 'react'
import Filters from './Filters'
import List from './List'

const RestList = () => {
  return (
    <View>
    <Filters />
     <List />
    </View>
  )
}

export default RestList