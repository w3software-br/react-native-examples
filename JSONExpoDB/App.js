import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import User from './src/models/User';

export default function App() {

  const [user, setUser] = React.useState({});
  
  function storeData() {

    const data = {
      name: "Adriano Oliveira",
      profession: 'Programmer'
    }

    User.save(data)
      .then(userSaved => {
        if(userSaved) {
          setUser(userSaved);
          console.log(user); 
          alert('Saved!');
        }
      })
      .catch(error => {
        alert(error);
      });      
  }

  function getData() {
    User.getData()
      .then(result => {
        if(result){
          const user = JSON.parse(result); 
          alert(`${user.name}, ${user.profession}`);
        } else {
          alert('Not found');
        } 
      })
      .catch(error => {
        alert(error);
      });
  }  

  return (
    <View style={styles.container}>
      <Button 
        title="Save"
        onPress={storeData}
      />
      <Button 
        title="Recover"
        onPress={getData}
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
