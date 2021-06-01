import React from 'react';
import { View, StyleSheet } from 'react-native';

function ViewStyleProps() {
  return (
    <View style={styles.container}>
      <View style={styles.top}/>
      <View style={styles.middle}/>
      <View style={styles.bottom}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 5,
    margin: 5,
    marginTop: 30
  },

  top: {
    flex: 1,
    backgroundColor: "gray",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  middle: {
    flex: 0.5,
    backgroundColor: "beige",
    borderWidth: 1
  },

  bottom: {
    flex: 0.5,
    backgroundColor: "pink",
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ViewStyleProps;
