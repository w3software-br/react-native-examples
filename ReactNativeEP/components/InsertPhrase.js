import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import basic from './styles/basic';
import Phrase from './../models/Phrase';

import Separator from './Separator';

function InsertPhrase({navigation}) {
  console.log('Insert Phrase');
  const [value, onChangeText] = React.useState('');

  function change(text) {
    return onChangeText(text);    
  }

  function insert() {
    Phrase.insert(value);
  }

  return (
    <View style={basic.container}>
      
      <Text style={basic.intro}>Inserir um frase</Text>
      
      <Separator />

      <TextInput 
        style={basic.textInput}
        onChangeText={change}
        value={value}/>
      
      <Button 
        onPress={insert}
        title="Inserir"
        accessibilityLabel="Salvar Frase"
      />

    </View>
  );
}

export default InsertPhrase;