import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from "redux"
import userReducer from "./user"
import loginReducer from "./loginSlice"
import editProfileReducer from "./editProfile"

const rootReducer = combineReducers({
	user: userReducer,
	editProfile: editProfileReducer,
})

export default rootReducer
