
import { createStore } from 'redux';
import {updateLocation} from './Reducers/heyUserLocationReducer'

export const updateLocation = createStore(updateLocation)
