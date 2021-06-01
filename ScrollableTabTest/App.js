import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import ScrollableTabView from 'react-native-scrollable-tab-view'; 

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <ScrollableTabView>
      	<View tabLabel='Tab 1' style={{flex: 1, fontSize: 30}}>
          
        </View>
        <View tabLabel='Tab 2'>
          
        </View>
      </ScrollableTabView>
    );
  }
}
