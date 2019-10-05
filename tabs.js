// import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from './home';
import AboutScreen from './about';
import ProfileScreen from './profile';

export default createBottomTabNavigator({
  // property & value
    Home: HomeScreen,
    Profile: ProfileScreen,
    About: AboutScreen
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
        
//     }
// });