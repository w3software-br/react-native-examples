import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

const fireBaseConfig = {
  apiKey: 'AIzaSyDwkpiZaHzlXej1YFEn8tfZWrfx_5odATc',
  authDomain: 'w3s-project.firebaseapp.com',
  databaseURL: 'https://w3s-project-default-rtdb.firebaseio.com/',
  projectId: 'w3s-project',
  storageBucket: 'w3s-project.appspot.com',
  // messagingSenderId: 'sender-id',
  appId: '1:68174645451:android:91f98a0f3fa3585084334e',
  // measurementId: 'G-measurement-id',
}

if (!firebase.apps.length) {
  firebase.initializeApp(fireBaseConfig)
} else {
  firebase.app()
}

export default function App(props) {

  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()

  function signUpUser(mail, password) {

    try {
      if (password.length < 6) {
        alert("Please, enter atleast 6 characters")
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
      
    } catch (error) {
      console.log(error.toString())
    }

  }

  function login(email, password) {
    alert(password)
  }

  return (    
    <Container style={styles.container}>
      <Header>
        <Text style={{color: 'white', fontSize: 25, justifyContent: 'center', alignItems: 'center'}}>
          My Header
        </Text>
      </Header>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
            autoCorrect={false}
            autoCaptalize="none"
            onChangeText={email => setEmail(email)}
          />
        </Item>

        <Item floatingLabel>
          <Label>Password</Label>
          <Input 
            secureTextEntry={true}
            autoCorrect={false}
            autoCaptalize="none"
            onChangeText={password => setPassword(password)}
          />
        </Item>

        <Button 
          style={{marginTop: 20}}
          full
          rounded
          success
          onPress={() => login(email, password)}
        >
          <Text style={{color: 'white', fontSize: 20}}>Login</Text>
        </Button>

        <Button 
          style={{marginTop: 20}}
          full
          rounded
          primary
          onPress={() => signUpUser(email, password)}
        >
          <Text style={{color: 'white', fontSize: 18}}>Sign Up</Text>
        </Button>
      </Form>
    </Container>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
});
