import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [coin, setCoin] = React.useState('usd');

  function changeCoin(itemValue, itemIndex) {
    console.log(itemValue, itemIndex);
    setCoin(itemValue)
  }

  return (
    <View style={styles.container}>
      <Text>Choose the coin</Text>
      <Picker
        selectedValue={coin}
        style={{heigth: 50, width: 100}}
        onValueChange={changeCoin}>
        <Picker.Item label="USD" value="usd"/>
        <Picker.Item label="BRL" value="brl"/>
        <Picker.Item label="CAD" value="cad"/>
      </Picker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
