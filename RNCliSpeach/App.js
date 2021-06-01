import React from 'react';
var Speech = require('react-native-speech');
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Test
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  title: {
    textAlign: 'center',
  }
});

export default App;
