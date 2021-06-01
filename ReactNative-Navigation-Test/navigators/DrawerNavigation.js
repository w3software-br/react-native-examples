import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import Home from './../screens/Home';
import Contact from './../screens/Contact';

function CustomdrawerContent(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.drawerHeader}>
        <View>
          <Text style={styles.drawerHeaderText}>Drawer Menu</Text>
        </View>        
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
          icon={() => <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} color='black' size={22}/>}
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
          />                  
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomdrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={Contact} />
      
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },

  drawerHeader: {
    backgroundColor: '#03cafc',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },

  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}