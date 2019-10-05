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

                    {/* <View style={styles.wrap}>
                        {
                            this.state.movie.map( (theMovie, index) =>
                            <Movie key={index} image={theMovie.moviePoster}></Movie>
                            )
                        }
                    </View> */}
                    
                    <View style={styles.wrap}>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie1.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie2.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie3.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie4.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie5.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie6.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie7.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie8.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie9.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie10.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie1.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                        <View style={styles.image}>
                            <Image style={styles.pict} source={require('./assets/movie2.jpg')}/>
                            <Text style={styles.button}>Add To List</Text>
                        </View>
                    </View>
                        

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
    // wrap: {
    //     alignItems: 'center',
    //     width: "90%",
    //     display: "flex",
    //     alignItems: "flex-start"
    // },
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
    boxes: {
        backgroundColor: "black",
        flex: 1,
        flexDirection: "row"
    },
    wrap: {
        flex:3,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-evenly",
        // marginRight: 20,
        // marginLeft: 10
    },
    image: {
        width: 100,
        height: 130,
        marginVertical: 20,
        borderRadius: 10,
        resizeMode: "cover",
        backgroundColor: "rgba(0,0,0,0.2)"
    },
    pict: {
        width: 100,
        height: 130,
        borderRadius: 10,
        resizeMode: "cover"
    },
    button: {
        textAlign: "center",
        fontFamily: 'Avenir-Light'
    }
});