import React from 'react';
import { View, StyleSheet, Image, Text, Animated } from 'react-native';

export default class Movie extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.box}>

                    <View style={styles.boxes}>
                        <Image style={styles.image} source={require('./assets/movie1.jpg')}/>
                        <Text style={styles.button}>Add To List</Text>
                    </View>

                    {/* <View style={styles.boxes}>
                        <Image style={styles.image} source={require('./assets/movie2.jpg')}/>
                        <Text style={styles.button}>Add To List</Text>
                    </View>

                    <View style={styles.boxes}>
                        <Image style={styles.image} source={require('./assets/movie3.jpg')}/>
                        <Text style={styles.button}>Add To List</Text>
                    </View> */}
                    
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    content: {
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center"

    },
    box: {
        flex:3,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "90%",
        height: 310,
        justifyContent: "space-evenly",
        marginRight: 20,
        marginLeft: 10
      },
    boxes: {
        width: "30%",
        flex: 1,
        flexDirection: "column",
        marginVertical: 20,
        borderRadius: 5,
        resizeMode: "cover"
      },
      box: {
        display: "flex",
        alignItems: "flex-start"
      },
      button: {
          textAlign: "center"
      },
      image: {
        width: '100%',
        height: 150,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.2)',
    }
});