import { View, Text ,Image,FlatList} from 'react-native'
import React from 'react'
import cars from '../../assets/data/cars'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default function HomeMap() {
  const  getImage = (type)=>{
    if(type === 'UberX'){
     return require( '../../assets/images/top-UberX.png')
    }
    if(type === 'Comfort'){
     return  require('../../assets/images/top-Comfort.png')

    }else{

      return  require('../../assets/images/top-UberXL.png')
    }

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

        {cars.map((car)=>(
                <Marker
                key={car.id}
                coordinate={{ latitude : car.latitude , longitude : car.longitude }}
                 >
                  <Image style={{width:50,height:50 ,resizeMode:'contain'}} source={ getImage(car.type)}/>
          
                 </Marker>

        ))}
   

    </MapView>
  )
}