import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Map from "./src/components/Map"
import Button from './src/components/Button';
import image from "./assets/HILmr.png"
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Live location tracker</Text>
      <Map />
      <Image
        style={styles.tinyLogo}
        source={image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, tinyLogo: {
    width: 300,
    height: 500,
  },
});
