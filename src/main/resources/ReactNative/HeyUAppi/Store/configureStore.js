
import { createStore } from 'redux';
import {updateLocation, updateAuth} from './Reducers/heyUserLocationReducer'

export const updateLocation = createStore(updateLocation)
export const updateAuth = createStore(updateAuth) 