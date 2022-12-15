import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

export default function HomeSearch() {
  return (
    <View>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>
            Where to?
          </Text>

        <View style={styles.containerTimer}>
          <AntDesign name={'clockcircle'} size={18} color={'black'} ></AntDesign>
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={20} color={'black'}></MaterialIcons>
        </View>

        </View>

        {/* box down item 1# */}
        <View style={styles.row}>
              <View style={styles.iconContainer}>
                <AntDesign name={'clockcircle'} size={16} color={'white'} ></AntDesign>
              </View>
              <Text style={styles.destination}>Spin Nigth Club</Text>
        </View>

        {/* Home Destination */}
        <View style={styles.row}>
              <View style={[styles.iconContainer,{backgroundColor:'#218cff'}]}>
                <Entypo name={'home'} size={16} color={'white'} ></Entypo>
              </View>
              <Text style={styles.destination}>Home</Text>
        </View>

    </View>
  )
}