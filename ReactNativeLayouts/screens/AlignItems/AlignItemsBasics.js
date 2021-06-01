import React from 'react';
import { View, StyleSheet } from 'react-native';

function AlignItemsBasics() {
  return (
    <View style={styles.main}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue',
        alignSelf: 'flex-end'}} />
      <View style={{height: 50, backgroundColor: 'skyblue'}} />
      <View style={{height: 100, backgroundColor: 'steelblue'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
});

export default AlignItemsBasics;
