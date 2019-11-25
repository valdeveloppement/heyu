

import React from 'react';
import {Dimensions, Slider, View, Text,  StyleSheet, Button} from 'react-native';

//const used for the styles const
const ScreenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class SearchScreen extends React.Component {

  state = {
    sliderValue : 10,
  }

  handleOnSliderChangeFetch = (sliderValue) => {

  }

  handleOnSliderChange = (sliderValue) => {
    this.setState({sliderValue:Math.round(this.toExponential(sliderValue))})
  }

  toExponential = (x) => {
    return Math.exp(x) + 10;
  }

  render() {
      
      return (
        <View style={styles.container}>
            <View>
              <Button title="registering" onPress={() => this.props.navigation.navigate('HeyURegistration')}/>
            </View>
            <View style={styles.sliderContainer}>
              <Text>Search radius</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={8.8}
                onValueChange={this.handleOnSliderChange}
                onSlidingComplete={this.handleOnSliderChangeFetch}
              />
              <Text style={styles.sliderInfos}>{this.state.sliderValue} mètres</Text>
            </View>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    height : screenHeight,
  },

  sliderContainer: {
    flex:1,
    height : 130,
    marginBottom : 160,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  sliderInfos : {
    color : "red",
    marginTop : 30,
    fontWeight : "bold"
  },

  slider : {
    transform: [{ scaleX: 3.1 }, { scaleY: 3.1 }],
    width : ScreenWidth / 3,
  },

  
});