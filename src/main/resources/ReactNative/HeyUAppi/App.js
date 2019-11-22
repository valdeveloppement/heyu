import React from 'react';
//import react in our code. 
import {View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';


import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import { Slider } from 'react-native-elements';
 
import SearchScreen from './components/SearchScreen';
import LoggingScreen from './components/LoggingScreen';

class App extends React.Component {
  state = {
    heyUserName: 'nobody',
    heyUserPassword: '0000',
    heyUserPasswordConfirm: '0000',
    heyUserSearchRadius:10,
    heyUserLongitude: "0",//Initial Longitude
    heyUserLongitude: "0",//Initial Latitude
    currentAccuracy:"0",
    positionCountChange: 0,
    heyUserNearU: [],
    heyUserMessage: "Hi, I'm new on HeyU!",
    heyUserPic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"

 }


 componentDidMount = () => {
  
    var that =this;
    //Checking for the permission just after component loaded
    if(Platform.OS === 'ios'){
      this.callLocation(that);
    }else{
     const  requestLocationPermission = async ()=> {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
              'title': 'Location Access Required',
              'message': 'This App needs to Access your location'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            that.callLocation(that);
            
          } else {
            alert("Permission Denied");
          
          }
        } catch (err) {
          alert("err",err);
          console.warn(err)
        }
      }
      requestLocationPermission();
    }    
  }



  updateHeyUserNearUList = (that) => {
    console.log("updateHeyUserNearUList s'execute")

    fetch('http://192.168.8.105:8080/updateLocation', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       heyUserName: that.state.heyUserName,
       heyUserPassword: that.state.heyUserPassword,
       heyUserSearchRadius: that.state.heyUserSearchRadius,
       heyUserLongitude: that.state.heyUserLongitude,
       heyUserLatitude: that.state.heyUserLatitude,
     }),
   }).then((response) => response.json())
       .then((responseJson) => {
         that.setState({ heyUserNearU:responseJson.heyUserNearU });
         console.log(that.state.heyUserNearU);
         console.log("longueur du tableau = "+ that.state.heyUserNearU.length);
         return responseJson.heyUserNearU;
       })
       .catch((error) => {
         console.error(error);
       });
  }
  


 callLocation(that){
  //alert("callLocation Called");
    Geolocation.getCurrentPosition(
      //Will give you the current location
       (position) => {
          const heyUserLongitude =JSON.stringify(position.coords.longitude);
          //getting the Longitude from the location json
          const heyUserLatitude = JSON.stringify(position.coords.latitude);
          //getting the Latitude from the location json
          const currentAccuracy = JSON.stringify(position.coords.accuracy);
          //getting the Latitude from the location json
          that.setState({ currentAccuracy:currentAccuracy });
          //Setting state Longitude to re re-render the Longitude Text
          that.setState({ heyUserLatitude:heyUserLatitude });
          //Setting state Latitude to re re-render the Longitude Text
          that.setState({ heyUserLongitude:heyUserLongitude });
          //Setting state Latitude to re re-render the Longitude Text
       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000,distanceFilter: 3 }

    );
    that.watchID = Geolocation.watchPosition((position) => {
      //Will give you the location on location change
        console.log(position);
        const heyUserLongitude = JSON.stringify(position.coords.longitude);
          //getting the Longitude from the location json
          const heyUserLatitude =JSON.stringify(position.coords.latitude);
          //getting the Latitude from the location json
          const currentAccuracy = JSON.stringify(position.coords.accuracy);
        //getting the Latitude from the location json
       that.setState({ heyUserLongitude:heyUserLongitude });
       //Setting state Longitude to re re-render the Longitude Text
       that.setState({ heyUserLatitude:heyUserLatitude });
       //if position changes
       that.setState({ positionCountChange:this.state.positionCountChange+1});
       //accuracy
       that.setState({ currentAccuracy:currentAccuracy });

      // Fetch Here
      that.updateHeyUserNearUList(that);
      

    },
    (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 3 }
    );
  }



 componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
 }


 //Setters
  setHeyUserSearchRadius= (newRadius) =>{
    this.setState({ heyUserSearchRadius:newRadius });

  }


  setHeyUserPic = (url) =>{
    this.setState({ HeyUserPic:url });

  }

  setheyUserMessage= (newMessage) =>{
    this.setState({ heyUserMessage:newMessage });

  }

 
 render() {
    return (
       <AppContainer />
      //  <View style = {styles.container}>
      //     <Search AppState = {this.state} setHeyUserSearchRadius ={this.setHeyUserSearchRadius} setHeyUserPic={this.setHeyUserPic} setheyUserMessage={this.setheyUserMessage}/>
      //  </View>
    )
 }
}

const AppNavigator = createStackNavigator(
  {
    
      Logging: LoggingScreen,
      // Registering: Registering
      Search: SearchScreen
  },
  {
    initialRouteName: 'Logging',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      }
    }
  }
);




//Styles
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
 },
 boldText: {
    fontSize: 20,
    color: 'red',
 }
})

export default createAppContainer(AppNavigator);