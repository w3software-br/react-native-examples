import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tm from './components/Tm';
import MyTask from './services/MyTask'

export default function App() {
  const registerMyTask = () => {
    MyTask.register()
      .then(() => console.log("task registred"))
      .catch(error => console.error(error))
  }

  const unRegisterMyTask = () => {
    MyTask.unregister()
      .then(() => console.log("task unregistred"))
      .catch(error => console.error(error))
  }
  
  return (
    <View style={styles.container}>
      <Text>Trying working in background...</Text>
      <Button 
        title="Register"
        onPress={() => registerMyTask()}
      />
      <Button 
        title="Unregister"
        onPress={() => unRegisterMyTask()}
      />
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
