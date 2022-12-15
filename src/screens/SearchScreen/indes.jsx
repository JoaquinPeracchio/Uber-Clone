import { View, Text ,TextInput,SafeAreaView} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useEffect, useState } from 'react'
import styles from './styles'


export default function SearchDestination() {
  const [fromText,setFromText]=useState('')
  const [destinationText,setDestinationText]=useState('')

  useEffect(()=>{
    if(fromText && destinationText){
      console.warn('true')
    }
  },[fromText,destinationText])




  return (
    <SafeAreaView>
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='From'
      onPress={(data, details = null) => {
        setFromText(details)
        console.log(data, details);
      }}
      styles={{textInput:styles.Textinput}}
      query={{
        key: 'AIzaSyAg40PvnlMTEQJNKD2FInIDMtRcIsuAwos',
        language: 'en',
      }}
    />
  
    <GooglePlacesAutocomplete
      placeholder='Where to'
      onPress={(data, details = null) => {
        setDestinationText(details)
        console.log(data, details);
      }}
      styles={{textInput:styles.Textinput}}
      query={{
        key: 'AIzaSyAg40PvnlMTEQJNKD2FInIDMtRcIsuAwos',
        language: 'en',
      }}
    />
  
    
    </View>

    
    </SafeAreaView>
  )
}