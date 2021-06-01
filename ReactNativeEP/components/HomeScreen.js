import React from 'react';
import { View, Text, Button } from 'react-native';
import basic from './styles/basic';
import Separator from './Separator';

function HomeScreen({navigation}) {
  return (
    <View style={basic.container}>
      <Text style={basic.intro}>
        Aprenda Inglês com Frases
      </Text>
      <View style={basic.fixToText}>
        <Button
          title="Inserir Uma Frase"
          onPress={() => navigation.navigate('Inserir Frase')}
        />
        <Separator />        
        <Button 
          title="Dê-me Uma Frase"
          onPress={() => navigation.navigate('Dê-me Uma Frase')}
        />   
        <Separator />        
        <Button 
          title="Inicializar"
          onPress={() => navigation.navigate('Inicializar')}
        />
      </View>
    </View>
    
  );
}

export default HomeScreen;

