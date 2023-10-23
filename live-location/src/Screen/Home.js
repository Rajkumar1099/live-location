
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions"
import { GOOGLE_API_KEY } from '../Constant/GoogleApiKey';
 const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width/ screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA* ASPECT_RATIO;
 function Home({navigation}) { 
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const [position, setPosition] = useState({
    pickupCord:{
      latitude:12.9080,
      longitude:77.6410,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCors:{
      latitude:12.9084,
      longitude:77.6350,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  });

  const {pickupCord, droplocationCors} = position;
  const mapRef=useRef()
  const onPressLocation=()=>{
    navigation.navigate('ChooseLocation')
  }
  
  return (
    <View style={{ flex: 1 }}>
        <View style={{flex:1}}>
            <MapView style={StyleSheet.absoluteFill}
                initialRegion={{
                    ...pickupCord,
                    latitudeDelta:LATITUDE_DELTA,
                    longitudeDelta:LONGITUDE_DELTA
                }}
            >
                <Marker coordinate={pickupCord} />
                <Marker coordinate={droplocationCors}/>
                <MapViewDirections
                origin={pickupCord}
                destination={droplocationCors}
                apikey={GOOGLE_API_KEY}
                strokeWidth={3}
                strokeColor="hotpink"
                optimizeWaypoints={true}
                onReady={(res)=>{
                    mapRef.current.fitToCoordinates(res.coordinates,{
                    edgePadding:{
                    right:30,
                    bottom:300,
                    left:30,
                    top:100
                    }
                })}}
                />
            </MapView>
        </View>
      <View style={styles.bottomCard}>
        <Text>Where are you going ?</Text>
        <TouchableOpacity style={styles.inputText}
        onPress={onPressLocation}>
            <Text>Choose your location</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  tinyLogo: {
    width: 300,
    height: 500,
  },
  buttonContainer:{
    height:30,
    width:100,
  },
  bottomCard:{
    backgroundColor:'white',
    padding:30,
    width:'100%',
    borderTopEndRadius:24,
    borederTopStartRadius:24,
  },
  inputText:{
    backgroundColor:'white',
    borderRadius:4,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1 
  }
});
