import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    "Josefin_Sans": require('./assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf'),
    "Audiowide": require('./assets/fonts/Audiowide/Audiowide-Regular.ttf')
  });

  return (
    fontsLoaded  
    ? (
      <View style={styles.container}>
        <Text style={styles.textStile}>This is just a test</Text>
        <StatusBar style="auto" />
      </View>
    )
    : (
      <AppLoading />
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStile: {
    fontFamily: 'Audiowide', fontSize: 30
  }
});
