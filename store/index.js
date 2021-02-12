import {combineReducers} from "redux"
import userReducer from "./user"
import loginReducer from "./loginSlice"

const rootReducer = combineReducers({
	user: userReducer,
	login: loginReducer,
})

export default rootReducer
