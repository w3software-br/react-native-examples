import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function SpinnerComponent() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center'
  },
});

export default SpinnerComponent;
