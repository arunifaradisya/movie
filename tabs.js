import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home';
import AboutScreen from './about';
import ProfileScreen from './profile';

const tabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={22} />
      )
    }
  },
  Profile: { screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={22} />
      )
    }
  },
  About: { screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: "About",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-help-circle-outline" color={tintColor} size={22} />
      )
    }
  }
});

export default createAppContainer (tabNavigator)


// export default createBottomTabNavigator({
//   // property & value
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//     About: AboutScreen
// });

// const styles = StyleSheet.create({
//     Home: { screen: HomeScreen,
//       navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => (
//       <Icon name="ios-home" color={tintColor} size={22} />
//       )
//     }
//   }
// );