import * as React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './Src/navigation/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <BottomTab />
    </NavigationContainer>
  ); 
}
export default App;
