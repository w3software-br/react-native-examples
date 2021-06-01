import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDwkpiZaHzlXej1YFEn8tfZWrfx_5odATc',
  authDomain: 'w3s-project.firebaseapp.com',
  databaseURL: 'https://w3s-project-default-rtdb.firebaseio.com/',
  projectId: 'w3s-project',
  storageBucket: 'w3s-project.appspot.com',
  // messagingSenderId: 'sender-id',
  appId: '1:68174645451:android:91f98a0f3fa3585084334e',
  // measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ok! Now, I need create something really robust</Text>
      <StatusBar style="ligth" />
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
