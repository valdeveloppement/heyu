
import { createStore } from 'redux';
import {updateLoc, updateAuth} from './Reducers/heyUserLocationReducer'

export const updateLocation = createStore(updateLoc)
export const updateAuth = createStore(updateAuth) 