import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Asset } from 'expo-asset';

export default class LoginScreen extends Component {
  render() {
      return (
          <View style={styles.container}>

              <Image style={styles.logo} source={require('./assets/logo_LOGO.png')}/>
              <Button style={styles.loginbtn} onPress = {
                  () =>
                  this.props.navigation.navigate('Home')
              }
              title="Log In." 
              color="black"
              fontFamily='Avenir-Black' fontSize="10%"></Button>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        width: '100%'
    },
    logo: {
        width: '60%',
        height: 210,
        marginBottom: '10%'
    }
});