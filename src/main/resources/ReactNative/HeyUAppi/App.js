import React from 'react';



import Navigation from './navigation/navigation';

import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import MyGeolocation from './components/MyGeolocation'
import UpdateHeyUserNearUList from './components/UpdateHeyUserNearUList'


export default class App extends React.Component {

 
 render() {
    return (
      <Provider store={Store}>
        <MyGeolocation>
          <UpdateHeyUserNearUList>
            <Navigation/>
          </UpdateHeyUserNearUList>
        </MyGeolocation>
    </Provider>
    )
 }
}

