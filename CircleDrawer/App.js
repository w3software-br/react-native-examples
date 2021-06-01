import React from 'react';
import {View, Text} from 'react-native';
import Drawer from 'react-native-circle-drawer';


function App() {
  return (
  <View>
    <Text>My App</Text>
  </View>);
}

function CD() {
  return (
    <Drawer>
      <App />
    </Drawer>
  );
}

export default App;