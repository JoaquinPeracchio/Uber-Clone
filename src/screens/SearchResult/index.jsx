import { Dimensions, View} from 'react-native'
import React from 'react'
import HomeRoute from '../../components/HomeRoute/index'
import UberTypes from '../../components/UberTypes/indes'


export default function index() {


  return (
    <View>
      <View style={{height:Dimensions.get('window').height-330}}>
     <HomeRoute/>

      </View>
     <View style={{height:100}}>
     <UberTypes/>
     </View>
    </View>
  )
}