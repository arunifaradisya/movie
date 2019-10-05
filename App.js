import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import the login & tabs js file to app.js
import LoginScreen from './login';
import Tabs from './tabs';

//t
const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  tabs: Tabs
});

export default createAppContainer(stackNavigator)
