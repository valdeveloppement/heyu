
const initialState = {  heyuserLocation:{
    heyUserLongitude: "1",
    heyUserLatitude: "1",
    heyUserAccuracy:"44000",
    heyUserSearchRadius:10000,
  } }

function updateLocation(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'UPDATE_LOCATION':
        console.log("Case Update_location");
        console.log("action reçue = "+action.value.heyUserLongitude)
        // nextState = {
        //   ...state,
        //   heyuserLocation: action.value
        // }

        state.heyuserLocation= action.value;
    console.log("returned state : "+state.heyuserLocation.heyUserLongitude)
    return nextState || state
  default:
    return state
  }
}

export default updateLocation