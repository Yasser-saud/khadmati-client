import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	loading: false,
	userInfo: null,
	hasErrors: false,
	errMessage: null,
	isAuthenticated: false,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUser: (state, {payload}) => {
			state.loading = true
		},
		getUserSuccess: (state, {payload}) => {
			;(state.loading = false),
				(state.userInfo = payload),
				(state.isAuthenticated = true),
				(state.hasErrors = false)
		},
		getUserFailuer: (state, {payload}) => {
			;(state.loading = false), (state.hasErrors = true), (state.errMessage = payload)
		},
		logoutSuccess: (state, {payload}) => {
			;(state.isAuthenticated = false), (state.userInfo = null)
		},
	},
})

export const {getUser, getUserSuccess, getUserFailuer, logoutSuccess} = userSlice.actions

export default userSlice.reducer

export const userSelector = (state) => state.user

export function fetchUser() {
	return async (dispatch) => {
		dispatch(getUser())

		try {
			const res = await axios.get("/api/user/get-user")
			dispatch(getUserSuccess(res.data))
		} catch (error) {
			console.log(error.response)
			dispatch(getUserFailuer())
		}
	}
}
export function logout() {
	return async (dispatch) => {
		try {
			const res = await axios.get("/api/user/logout")
			dispatch(logoutSuccess())
		} catch (error) {
			console.log(error)
		}
	}
}
