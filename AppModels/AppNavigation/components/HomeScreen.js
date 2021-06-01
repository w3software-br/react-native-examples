import React from 'react';
import { View, Text, Button } from 'react-native';
import basic from './styles/basic';

function HomeScreen({navigation}) {
  return (
    <View style={basic.container}>
      <Text>Home Screen</Text>
      <Button 
        title="Got to Second Screen"
        onPress={() => navigation.navigate('Second Screen')}
      />
    </View>
  );
}

export default HomeScreen;

