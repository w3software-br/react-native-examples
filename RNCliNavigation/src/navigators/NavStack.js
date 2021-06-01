import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen';
import Contact from './../screens/Contact';
import About from './../screens/About';

const Stack = createStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator>

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerTintColor: "white",
          headerStyle: {backgroundColor: 'green'},          
        }}
      />

      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact us',
          headerTintColor: "white",
          headerStyle: {backgroundColor: '#45aa65'},          
        }}
      />

      <Stack.Screen 
        name="About"
        component={About}
        options={{
          title: 'About us',
          headerTintColor: "white",
          headerStyle: {backgroundColor: '#788945'},          
        }}
      />

    </Stack.Navigator>
  );
}

export default function NavStack() {
  // If you want push a navigator insede of another, do not pass other NavigationContainer 
  return (
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    <MyStack />
  );
}