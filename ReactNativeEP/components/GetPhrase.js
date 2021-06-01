import React from 'react';
import { View, Text, Button } from 'react-native';
import basic from './styles/basic';
import Phrase from './../models/Phrase';

import Separator from './Separator';

function GetPhrase({navigation}) {
  var [phrase, setPhrase] = React.useState('carregando ...');
  var [phraseId, setPhraseId] = React.useState(0);

  function used() {
    Phrase.setUsed(phraseId)
    .then(response => {
      if(response.data.ok == true) {
        alert('Frase marcada como usada');
      } else {
        alert("Não foi possível marca essa frase como usada");
      }
    })
    .catch(error => {
      alert(error);
    })
  }

  Phrase.givemeAPhrase()
  .then(response => {
    try {
      setPhrase(response.data.phrase._text);
      setPhraseId(response.data.phrase.id);
    } catch (error) {
      setPhrase('No Phrase');
    }
    
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <View style={basic.container}>
      
      <Text style={basic.intro}>My Phrase</Text>
      
      <Separator />

      <Text style={basic.phrase}>{phrase}</Text>

      <Separator />

      <Button 
        onPress={used}
        title="Marcar como Usada"
      />

    </View>
  );
}

export default GetPhrase;