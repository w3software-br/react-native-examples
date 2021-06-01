import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Share } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

// https://github.com/dumbest/react-native-qrcode-svg-expo#saving-generated-code-to-gallery

export default function App() {
  const [input, setInput] = React.useState('');
  const [codeText, setCodeText] = React.useState("https://example.com");
  
  function Simple() {
    return <SvgQRCode value={codeText}/>;
  }  

  function createQRCode() {
    if(input != '') setCodeText(input);
    else alert('Empty imput');    
  }

  function saveQRCode() {
    if(codeText) {
      alert(codeText);
    } else alert("Do create a qrcode please");
  }

  return (
    <View style={styles.container}>
      <Simple />
      <TextInput 
        value={input}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
        onChangeText={text => setInput(text)}
      />
      <Button title="Create" onPress={createQRCode}/>
      <Button title="Save" onPress={saveQRCode}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
