import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#03cafc'
    }}>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: '800'
        }}
      >Home is here</Text>
      <Button 
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
  },

  title: {
    textAlign: 'center', fontSize: 25
  }

})
