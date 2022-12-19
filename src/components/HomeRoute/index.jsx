import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
export default function HomeRoute() {

  const origin={
    latitude: 28.450627,
    longitude: -16.263045,
  }
const GOOGLE_MAPS_APIKEY='AIzaSyAg40PvnlMTEQJNKD2FInIDMtRcIsuAwos'
  const destination={
    latitude: 28.450127,
    longitude: -16.269045,
  }
  return (
  
      <MapView style={{width:'100%', height:'100%'}}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
      >

 <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
  /> 

    </MapView>
  )
}