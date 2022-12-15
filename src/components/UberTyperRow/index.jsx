import { View, Text ,Image} from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function UberTypeRow(props) {

    const {type} = props

    const  getImage = ()=>{
      if(type.type === 'UberX'){
       return require( '../../assets/images/UberX.jpeg')
      }
      if(type.type === 'Comfort'){
       return  require('../../assets/images/Comfort.jpeg')

      }else{

        return  require('../../assets/images/UberXL.jpeg')
      }

      }
    

  return (
    <View style={styles.container} key={type.id}>
 <Image style={styles.image} source={getImage()}/>
      {/* image */}
      <View style={styles.middle}>
            <Text style={styles.type}>
                {type.type}{' '}
            <Ionicons name={'person'} size={12} color={'gray'}/>
                {' '}3
            </Text>
            <Text>8:03pm  Dropoff</Text>        
      </View>
      <View style={styles.last}>
      <Ionicons name={'pricetag'} size={12} color={'green'}/>
      <Text style={styles.price}>est.{type.price}</Text>
      </View>
    </View>
  )
}