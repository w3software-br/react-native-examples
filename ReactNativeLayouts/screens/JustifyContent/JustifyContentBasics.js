import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

function JustifyContentBasics() {
  return (
    <View style={styles.container}>
      <View style={{ width: 50, height: 50, backgroundColor: '#874565'}}></View>
      <View style={{ width: 50, height: 50, backgroundColor: 'blue'}}></View>
      <View style={{ width: 50, height: 50, backgroundColor: 'green'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default JustifyContentBasics;
