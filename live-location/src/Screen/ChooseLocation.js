import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../Constant/GoogleApiKey';
const ChooseLocation = ({navigation}) => {

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
      />
    </View>
  )
}

export default ChooseLocation

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})