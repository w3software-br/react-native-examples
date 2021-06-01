import React from 'react';
import { Text, View } from 'react-native';
//components
import DrawerNavigation from './navigators/DrawerNavigation';
import BottomTabNavigation from './navigators/BottomTabNavigation';
import StackNavigation from './navigators/StackNavigation';

export default function App() {
  return (
    <BottomTabNavigation />
  );
}

