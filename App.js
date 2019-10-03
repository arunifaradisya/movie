import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingsScreen from './settings';


const tabNavigator = createBottomTabNavigator({
  // property & value
    Home: HomeScreen,
    About: AboutScreen,
    Settings: SettingsScreen
})

// built a tab bar
export default createAppContainer(tabNavigator)
