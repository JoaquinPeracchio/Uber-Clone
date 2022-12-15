import { View, Text , Pressable} from 'react-native'
import React from 'react'
import styles from './styles'
import UberTypeRow from '../../components/UberTyperRow'
import typesData from '../../assets/data/types'
export default function UberTypes() {
  const confirm = ()=>{
    console.warn('pressed')
  }
  return (
    <View>
      {     typesData.map(type =>  <UberTypeRow type={type}/>) }
      <Pressable onPress={confirm}>
    <Text style={{
      backgroundColor:'black',
      textAlign:'center',
      padding:10,
      margin:10,
      color:'white'

    }}>Confirm Uber</Text>
</Pressable>
    </View>
  )
}