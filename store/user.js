import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	loading: false,
	userInfo: null,
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
			state.loading = false
			state.userInfo = payload
			state.isAuthenticated = true
		},
		logoutSuccess: (state, {payload}) => {
			state.isAuthenticated = false
			state.userInfo = null
		},
		CLEAR_STATE: (state, {}) => {
			state.isAuthenticated = false
			state.userInfo = null
		},
	},
})

export const {getUser, getUserSuccess, logoutSuccess, CLEAR_STATE} = userSlice.actions

export default userSlice.reducer

export const userSelector = (state) => state.user

export function fetchUser(userInfo) {
	return async (dispatch) => {
		dispatch(getUserSuccess(userInfo))
	}
}
export function clearState() {
	return (dispatch) => {
		dispatch(CLEAR_STATE())
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
