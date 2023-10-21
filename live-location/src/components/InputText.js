import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const InputText = () => {
  const [text, onChangeText] = React.useState('Search');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter your location'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height:30,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width:100,
    borderRadius:5,
  },
});

export default InputText;