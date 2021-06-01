import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavStack from './NavStack';
import NavDrawer from './NavDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function WellCome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wellcome!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function NavBt() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Wellcome"
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'red',
        }}>

        <Tab.Screen name="Wellcome" 
          component={WellCome}
          options={{
            // tabBarLabel: 'Wellcome', 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen name="NavDrawer" 
        component={NavDrawer} 
        options={{
          // tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>

        <Tab.Screen name="NavStack" 
        component={NavStack} 
        options={{
          // tabBarLabel: 'NavStack',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}