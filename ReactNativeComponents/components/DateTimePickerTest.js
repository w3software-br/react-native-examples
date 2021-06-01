import React, { useState } from 'react';
import {View, Button, Platform, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Constants from 'expo-constants';

function DateTimePickerTest() {
  const  [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  function onChange(event, selectedDate) {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  }

  function showMode(currentMode) {
    setShow(true);
    setMode(currentMode);
  }

  function showDatepicker() {
    showMode('date');
  }

  function showTimepicker() {
    showMode('time');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Set Date and Time</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker" />
        </View>
      </View>
      <View style={styles.dtContainer}>
        <Text style={styles.dtText}>
          {JSON.stringify(date)}
        </Text>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ab3',
    justifyContent: 'space-around'
  },
  header: {
    flex: 0.33,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  buttonContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#fdd'
  },
  dtContainer: {
    flex: 0.33,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dtText: {
    color: 'white',
    fontSize: 20
  }
});

export default DateTimePickerTest;
