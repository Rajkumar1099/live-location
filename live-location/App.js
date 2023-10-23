import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCordinate from './src/Screen/AddCordinate';
import ChooseLocation from "./src/Screen/ChooseLocation"

export default function App (){

  const Stack=createNativeStackNavigator()

  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={AddCordinate}  />
        <Stack.Screen name='ChooseLocation' component={ChooseLocation}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    textAlign:'center'
  }
})
