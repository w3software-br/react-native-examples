import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Cellular from 'expo-cellular';
import Constants from 'expo-constants';

function CellularInfoTest() {
  const [allowsVoip, setAllowsVoip] = React.useState('Unfortunatelly, no');
  const [countryCode, setCountryCode] = React.useState('Not informed');

  React.useEffect(() => {
    (
      () => {
        if(Cellular.allowsVoip) {
          setAllowsVoip("This cellular allows voip calls");
        }

        if(Cellular.isoCountryCode) {
          setCountryCode(`The iso country code is ${Cellular.isoCountryCode}`);
        }
        
      }

    )();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {allowsVoip}
      </Text>

      <Text style={styles.text}>
        {countryCode}
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ddd'
  },
  text: {
    fontSize: 20,
    color: '#748599',
    padding: 5
  }
});

export default CellularInfoTest;
