import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


export default class AboutScreen extends Component {
  render() {
      return (
          <View style={styles.container}>

            <View style={styles.background}>
                <Image style={styles.shape} source={require('./assets/about-bg.png')}/>
                <View style={styles.text}>
                        <Text style={styles.h1}>About.</Text>
                        <Text style={styles.p}>Film Koo is a mobile application where you can save the titles of films that you have watched. Add the movie in your list and see how many movies you've watched! </Text>
                </View>

            </View>
          </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: '#5B8F8F'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    background: {
        width: "90%"
    },
    text: {
        margin: 50,
        marginTop: 120,
        position: "absolute"
    },
    h1: {
        position: "relative",
        fontFamily: "Avenir-Black",
        fontSize: 35,
        textAlign: "left"
    },
    p: {
        position: "relative",
        fontFamily: "Avenir-Book",
        fontSize: 20,
        textAlign: "left",
        marginTop: 30
    },
    shape: {
        left: 0,
        width: "100%",
        height: "100%"
    }

});