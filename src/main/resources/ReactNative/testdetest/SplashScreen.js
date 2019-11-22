import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
  } from 'react-native';

export default class SplashScreen extends React.Component{
    render() {
        const viewStyles = [
          styles.container,
          { backgroundColor: 'orange' }
        ];
        const textStyles = {
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold'
        };
    
        return (
          <View style={viewStyles}>
            <Text style={textStyles}>
              Splash Screen
            </Text>
          </View>
        );
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4F6D7A',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#F5FCFF',
    },
    instructions: {
      textAlign: 'center',
      color: '#F5FCFF',
      marginBottom: 5,
    },
  });