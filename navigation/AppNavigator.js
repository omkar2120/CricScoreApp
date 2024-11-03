// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
// import MatchScreen from '../screens/MatchScreen';
import MatchSetupScreen from '../screens/MatchScreen';
import ScoreScreen from '../screens/ScoreScreen';
import MainMenuScreen from '../screens/MainMenuScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="MatchSetup" component={MatchSetupScreen} />
    <Stack.Screen name="Score" component={ScoreScreen} />
  </Stack.Navigator>
  );
}
