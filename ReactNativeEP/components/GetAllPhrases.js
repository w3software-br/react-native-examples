import React from 'react';
import { View, Text, Button } from 'react-native';
import basic from './styles/basic';

function GetAllPhrases({navigation}) {
  return (
    <View style={basic.container}>
      <Text>GetAllPhrases</Text>
      <Button 
        title="Got to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default GetAllPhrases;