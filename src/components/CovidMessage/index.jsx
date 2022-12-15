import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taveling just is necessary</Text>
      <Text style={styles.text}>We know the pandemic has been difficult. But you’ve continued to go the extra mile to help protect our communities—whether it’s wearing a mask, making space for one another, or giving drivers the respect they deserve</Text>
      <Text style={styles.learnMore} >Learn More => </Text>
    </View>
  )
}