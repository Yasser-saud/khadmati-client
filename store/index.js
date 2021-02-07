import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import userReducer from './user'
import loginReducer from './loginSlice'


const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer;