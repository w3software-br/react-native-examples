import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';


function Item({ item }) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

}

export default function ContactsTest() {

  function renderItem({ item }) {
    return (
      <Item item={item}/>
    );
  }

  const [names, setNames] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          // const contact = data[3];
          // console.log(contact.emails[0].email);
          var names = []
          data.forEach((item, i) => {
            names.push({key: `${i}`, title: item.name});
          });
          setNames(names);
          console.log(names);

        }
      }
    })();
  }, []);

  if(names) {
    return (
      <SafeAreaView style={styles.formContainer}>
        <FlatList
          data={names}
          renderItem={renderItem}
          keyExtractor={item => item.key} />
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.waiting}>
        <Text>Wait just a little bit</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  waiting: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddf'
  },
});
