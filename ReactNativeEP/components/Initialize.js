import React from 'react';
import { View, Text, Button } from 'react-native';
import basic from './styles/basic';
import Phrase from './../models/Phrase';

function Initialize({navigation}) {
  const [result, setResult] = React.useState('aguarde...');

  Phrase.initialize()
  .then(result => {
    console.log(result.data);
    setResult("Operação realizada com sucesso");
  })
  .catch(error => {
    console.error(error);
    setResult("Não foi possível realizar essa operação");
  });

  return (
    <View style={basic.container}>
      <Text style={basic.phrase}>
        {result}
      </Text>
      <Button 
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Initialize;