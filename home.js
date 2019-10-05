import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

import movieJSON from './movielist.json';
import Movie from './Movie';

export default class HomeScreen extends Component {

    state =  { movie: [] }

    componentDidMount() {
        this.setState({ movie: movieJSON });
    }

  Movie =(item)=>{}

  render() {
      return (
          <View style={styles.container}>

              <ScrollView style={styles.content}>

                    <View style={styles.header}>
                        <Image style={styles.logo} source={require('./assets/logo_LOGO.png')}/>
                    </View>

                    <Text style = {styles.headtitle}>Start adding the movie you've watched!</Text>

                  
                        {
                            this.state.movie.map( (theMovie, index) =>
                            <Movie key={index} image={theMovie.moviePoster}></Movie>
                            )
                        }
                   
                    

              </ScrollView>


          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: "100%",
        justifyContent: "center",
        textAlign: "center"
    },
    container: {
        width: "100%"
    },
    header: {
        backgroundColor: '#5B8F8F',
        height: 200,
        top: 0,
        width: "100%",
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        textAlign: "center",
        justifyContent: "center",
    },
    headtitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: "center",
        margin: 20
    },
    logo: {
        width: "35%",
        height: "60%",
        left: "32%",
        right: "32%"
    },
    image: {
        position: "absolute",
        width: "40%",
        backgroundColor: "black"
    },
    boxes: {
        backgroundColor: "black",
        flex: 1,
        flexDirection: "row"
    }
});