import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

function App() {
  function speak() {
    var phrase = "I can speak English. I am not so good. But, I can do it";
    Speech.speak(phrase);
  }

  return (
    <View style={styles.container}>
      <Button title="Speak" onPress={speak}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  }
});

export default App;
