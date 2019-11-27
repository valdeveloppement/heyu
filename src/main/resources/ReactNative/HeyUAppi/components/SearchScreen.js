

import React from 'react';
import {Dimensions, Slider, View, Text,  StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux'

//const used for the styles const
const ScreenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class SearchScreen extends React.Component {


  state = {

    sliderValue : 10,
    heyUserNearU: [],
    // //if heyUser is connected
    // heyUserIsConnected:true,

    // //identification
    // heyUserAuthentication:{
    //   heyUserName: 'nobody',
    //   heyUserPassword: '0000',
    //   heyUserConfirmPassword: '0000',
    // },

    //list of heyUsers near
 

    // //Profil
    // heyUserProfil:{
    //   heyUserMessage: "Hi, I'm new on HeyU!",
    //   heyUserPic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    // },

    // // count of update geolocation
    // positionCountChange: 0
  }



  updateHeyUserNearUList = () => {
    console.log("updateHeyUserNearUList s'execute")

    if(this.props.heyUserIsConnected == true){
        fetch('http://192.168.8.105:8080/updateLocation', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        heyUserAuthentication: this.props.heyUserAuthentication,
        heyUserLocation: {
          heyUserLongitude: this.props.heyUserLocation.heyUserLongitude,
          heyUserLatitude: this.props.heyUserLocation.heyUserLatitude,
          heyUserAccuracy:this.props.heyUserLocation.heyUserAccuracy,
          heyUserSearchRadius:this.state.sliderValue,
          },
       
        }),
         }).then((response) => response.json())
        .then((responseJson) => {
            // this.setState({ heyUserNearU:responseJson.heyUserNearU });
            // console.log(this.state.heyUserNearU);
            console.log("longueur du tableau = "+ this.state.heyUserNearU.length);
            return responseJson.heyUserNearU;
        })
        .catch((error) => {
            console.error(error);
        });

    }


  }

  componentDidUpdate =() =>{
  this.updateHeyUserNearUList();

  }


  handleOnSliderChangeFetch = (sliderValue) => {
  this.updateHeyUserNearUList();

  }

  handleOnSliderChange = (sliderValue) => {
     this.setState({sliderValue:Math.round(this.toExponential(sliderValue))})

    // return (<View><Text style={styles.sliderInfos}>{this.toLisible(Math.round(this.toExponential(sliderValue)))}</Text></View>);
  }

  toExponential = (x) => {
    // return Math.pow(x,3) + 10;
    // return 10+Math.pow(x,4)
    // return 1000*Math.exp(x)-1000
    return 10*Math.exp(x)-10

  }

  toLisible = (x) => {
    let unit ="metres";
    if(x>1000){
    x=Math.round(x/1000);
    unit="kilometres"
    }
  return radius = ""+x+" "+unit;

  }

  render() {
      
      return (
        <View style={styles.container}>
            <View>
              <Button title="registering" onPress={() => this.props.navigation.navigate('HeyURegistration')}/>
            </View>

            <Text>Longitude = {this.props.heyUserLocation.heyUserLongitude}</Text>
            <Text>Latitude = {this.props.heyUserLocation.heyUserLatitude}</Text>
            <Text>name = {this.props.heyUserAuthentication.heyUserName}</Text>
            <Text>mp = {this.props.heyUserAuthentication.heyUserPassword}</Text>


            <View style={styles.sliderContainer}>
              <Text>Search radius</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                // maximumValue={125.9919}  //x³+10
                // maximumValue={37.605}  //x4
                //  maximumValue={7.7}  //1000exp
                 maximumValue={12.206}  //100exp


                onValueChange={this.handleOnSliderChange}
                onSlidingComplete={this.handleOnSliderChangeFetch}
              />

               <Text style={styles.sliderInfos}>{this.toLisible(this.state.sliderValue)}</Text>
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


const mapStateToProps = (state) => {


  return {
    heyUserAuthentication:state.auth.heyUserAuthentication,
    heyUserIsConnected:state.auth.heyUserIsConnected,
    heyUserLocation:state.loc.heyUserLocation
  }


}




export default connect(mapStateToProps)(SearchScreen)
