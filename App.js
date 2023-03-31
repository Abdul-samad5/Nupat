import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs()
import React from 'react';

export default function App() {
 
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
    
  );
}


