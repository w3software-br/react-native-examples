import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FlexDirectionBasics() {
  return (
    <View>
      <View style={styles.container1}>
        <View style={{ width: 70, height: 100, backgroundColor: 'powderblue'}}>
          <Text style={styles.text}>c1.1</Text>
        </View>
        <View style={{ width: 70, height: 100, backgroundColor: 'skyblue'}}>
          <Text style={styles.text}>c1.2</Text>
        </View>
        <View style={{ width: 70, height: 100, backgroundColor: 'steelblue'}}>
          <Text style={styles.text}>c1.3</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={{ width: 50, height: 100, backgroundColor: 'powderblue'}}>
          <Text style={styles.text}>c2.1</Text>
        </View>
        <View style={{ width: 50, height: 100, backgroundColor: 'skyblue'}}>
          <Text style={styles.text}>c2.2</Text>
        </View>
        <View style={{ width: 50, height: 100, backgroundColor: 'steelblue'}}>
          <Text style={styles.text}>c2.3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1, flexDirection: 'column'
  },
  container2: {
    flex: 1, flexDirection: 'row-reverse'
  },
  text: {
    fontSize: 20,
  }
});

export default FlexDirectionBasics;
