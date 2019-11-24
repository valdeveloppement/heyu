import React from 'react';
import {View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


import Navigation from './navigation/navigation';

export default class App extends React.Component {
  
  state = {
    //if heyUser is connected
    heyUserIsConnected:true,

    //identification
    heyUserAuthentication:{
      heyUserName: 'nobody',
      heyUserPassword: '0000',
    },

    //list of heyUsers near
    heyUserNearU: [],

    //Profil
    heyUserProfil:{
      heyUserMessage: "Hi, I'm new on HeyU!",
      heyUserPic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },

    //my geolocation
    heyuserLocation:{
      heyUserLongitude: "0",
      heyUserLatitude: "0",
      heyUserAccuracy:"0",
      heyUserSearchRadius:5000,
    },

    // count of update geolocation
    positionCountChange: 0

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

    if(that.state.heyUserIsConnected == true){
        fetch('http://192.168.1.64:8080/updateLocation', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        heyUserAuthentication: that.state.heyUserAuthentication,
        heyUserLocation: that.state.heyUserLocation,
       
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


  }
  
  


 callLocation(that){
  //alert("callLocation Called");
    Geolocation.getCurrentPosition(
      //Will give you the current location

       (position) => {
        console.log(position);
          const heyUserLocation = {
            heyUserLongitude: JSON.stringify(position.coords.longitude),
            heyUserLatitude :JSON.stringify(position.coords.latitude),
            heyUserAccuracy: JSON.stringify(position.coords.accuracy),
          };

          that.setState({ heyUserLocation: heyUserLocation });

       },
       (error) => alert(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000,distanceFilter: 3 }

    );
    that.watchID = Geolocation.watchPosition((position) => {
      //Will give you the location on location change
        console.log(position);
        const heyUserLocation = {
          heyUserLongitude: JSON.stringify(position.coords.longitude),
          heyUserLatitude :JSON.stringify(position.coords.latitude),
          heyUserAccuracy: JSON.stringify(position.coords.accuracy),
        };

       that.setState({ heyUserLocation: heyUserLocation });
       that.setState({ positionCountChange:this.state.positionCountChange+1});

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
  // setHeyUserSearchRadius= (newRadius) =>{
  //   this.setState({ heyUserSearchRadius:newRadius });
  // }
  // setHeyUserPic = (url) =>{
  //   this.setState({ HeyUserPic:url });
  // }
  // setheyUserMessage= (newMessage) =>{
  //   this.setState({ heyUserMessage:newMessage });
  // }

 
 render() {
    return (
      <Navigation/>
     
    )
 }
}


