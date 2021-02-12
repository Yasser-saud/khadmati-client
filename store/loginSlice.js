import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const loginSlice = createSlice({
	name: "login",
	initialState: {
		hasErrors: false,
		errMessage: null,
		loading: false,
		success: false,
	},
	reducers: {
		LOGGING_IN: (state, {payload}) => {
			state.loading = true
		},
		LOGIN_SUCCESS: (state, {payload}) => {
			state.success = true
			state.loading = false
			state.hasErrors = false
		},
		LOGIN_FAILURE: (state, {payload}) => {
			state.loading = false
			state.hasErrors = true
			state.errMessage = payload
		},
	},
})

export const {LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE} = loginSlice.actions

export default loginSlice.reducer
export const loginSelector = (state) => state.login

export function loginSubmit(email, password) {
	return async (dispatch) => {
		dispatch(LOGGING_IN())

		try {
			const res = await axios.post("/api/user/login", {email, password})
			dispatch(LOGIN_SUCCESS())
		} catch (error) {
			dispatch(LOGIN_FAILURE(error.response.data))
		}
	}
}
