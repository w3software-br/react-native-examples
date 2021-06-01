import React from 'react';
import { View, Text, Button, StyleSheet, Platfform } from 'react-native';
import Constants from 'expo-constants';
import RNPickerSelect from 'react-native-picker-select';

export default function SelectTest() {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  function selectCategory(value) {
    setSelectedCategory(value);
  }

  function Category() {

    const placeholder = {
      label: 'Selecione uma categoria',
      value: null
    };

    return (
      <RNPickerSelect
        value={selectedCategory}
        onValueChange={selectCategory}
        placeholder={placeholder}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        items={[
          { label: 'Todas', value: '0' },
          { label: 'Alimentação', value: '1' },
          { label: 'Produtos de Limpeza', value: '2' },
          { label: 'Massas', value: '3' },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Categoria: </Text><Category />
      </View>
      <View style={styles.bodyContainner}>

      </View>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: 300,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  headerContainer: {
    flex: 0.2,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 20,
    // backgroundColor: '#ddd'
  },
  bodyContainner: {
    flex: 0.8,
    backgroundColor: '#048569'
  }
});
