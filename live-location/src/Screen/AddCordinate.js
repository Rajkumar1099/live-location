import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { request, PERMISSIONS } from 'react-native-permissions';
import GetLocation from 'react-native-get-location';

const AddCordinate = () => {
    const [map, setMap] = useState(null)
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "YOUR_API_KEY"
    //   })

    //   const onLoad = React.useCallback(function callback(map) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    
    //     setMap(map)
    //   }, [])
    
    //   const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    //   }, [])
   
const onPressLocation=()=>{
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
        if (result === 'granted') {
          // Now you can use GetLocation
          console.log(result)
          GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 1000,
        })
        .then(location => {
            console.log(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
        }
      });

}
    
  return (
    <View styles={styles.container}>
      <Text>AddCordinate</Text>
      <TouchableOpacity onPress={onPressLocation}>
        <Text>Get Your Location</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddCordinate

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})