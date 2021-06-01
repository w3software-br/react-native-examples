import React from 'react';
import { View, Text, Button } from 'react-native';
import basic from './styles/basic';

function SecondScreen({navigation}) {
  return (
    <View style={basic.container}>
      <Text>SecondScreen</Text>
      <Button 
        title='Got to Home Screen'
        onPress={() => navigation.navigate('Home Screen')}
      />
    </View>
  );
}

export default SecondScreen;