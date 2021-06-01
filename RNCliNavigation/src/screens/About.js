import React from 'react';
import { View, Text, Button } from 'react-native';

function About({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48d969'
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: '800',

        }}
      >About is here</Text>
      <Button 
        title="Go to Home Screen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

export default About;