import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';

function generateItems() {
  const DATA = [];
  for (var i = 0; i <= 20; i++) {
    DATA.push({
      id: i,
      title: `Item ${i}`
    });
  }
  return DATA;
}

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {

  function renderItem({ item }) {
    return (
      <Item title={item.title} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={generateItems()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#048675',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32
  }
});
