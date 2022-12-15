import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeMap/HomeSearch'
export default function HomeScreen() {
  return (
    <View>
      <View style={{height:Dimensions.get('window').height - 340}}>
      <HomeMap/>

      </View>
   
      <CovidMessage/>
      <HomeSearch/>
    </View>
  )
}