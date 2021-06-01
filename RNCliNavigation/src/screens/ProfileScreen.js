import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ProfileScreen
      </Text>
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
