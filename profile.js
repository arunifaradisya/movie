import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import movieJSON from './movielist.json';
import Movie from './Movie';

export default class ProfileScreen extends Component {

    state =  { movie: [] }

    componentDidMount() {
        this.setState({ movie: movieJSON });
    }

  Movie =(item)=>{}

  render() {
      return (
          <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={styles.header} >
                        <Text style={styles.h1}>Profile.</Text>
                    </View>

                    <View style={styles.profile}>
                        <View style={styles.left}/>
                        <View style={styles.right}>
                            <Text style={styles.h2}>User Name</Text>
                            <Text style={styles.p}>User ID</Text>
                            <Text style={styles.p}>Status Message</Text>
                        </View>
                    </View>

                    <View>
                        <Text style = {styles.headtitle2}>Your List.</Text>
                        
                    </View>
                    <View style={styles.wrap}>
                        <Image style={styles.image} source={require('./assets/movie1.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie2.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie3.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie4.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie5.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie6.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie7.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie8.jpg')}/>
                        <Image style={styles.image} source={require('./assets/movie9.jpg')}/>
                    </View>

                </ScrollView>

          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        textAlign: "center",
        justifyContent: "center",
    },
    header: {
        backgroundColor: '#FFC96C'
    },
    headtitle2: {
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20
    },
    h1: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: 'Avenir',
        textAlign: "center"
    },
    h2: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
        textAlign: "left"
    },
    p: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir-Light',
        textAlign: "left"
    },
    profile: {
        alignItems: 'center',
        flex: 1, 
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: "5%" 
    },
    left: {
        width: "25%",
        height: 100,
        backgroundColor: "#5B8F8F",
        borderRadius: 10,
        justifyContent: "center"
    },
    right: {
        width: "65%",
        height: 100,
        justifyContent: "center",
        paddingLeft: 10,
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
    }
    
});