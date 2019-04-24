import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from './components/ProfileScreen'
import HomeScreen from './components/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  }
});

export default createAppContainer(AppNavigator);