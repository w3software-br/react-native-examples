import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import HomeScreen from './components/HomeScreen';
import InsertPhrase from './components/InsertPhrase';
import GetPhrase from './components/GetPhrase';
import Initialize from './components/Initialize';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inserir Frase" component={InsertPhrase} />
        <Stack.Screen name="Dê-me Uma Frase" component={GetPhrase} />
        <Stack.Screen name="Inicializar" component={Initialize} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
