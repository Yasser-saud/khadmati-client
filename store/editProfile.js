import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	loading: false,
	hasErrors: false,
	errMessage: null,
}

const editProfileSlice = createSlice({
	name: "editProfile",
	initialState,

	reducers: {
		LOADING: (state, {payload}) => {
			state.loading = true
		},
		SUBMITING_PROFILE_SUCCESS: (state, {payload}) => {
			;(state.loading = false), (state.hasErrors = false)
		},
		SUBMITING_PROFILE_FALIUR: (state, {payload}) => {
			;(state.loading = false), (state.hasErrors = true), (state.errMessage = payload)
		},
	},
})

export const {
	LOADING,
	SUBMITING_PROFILE_SUCCESS,
	SUBMITING_PROFILE_FALIUR,
} = editProfileSlice.actions

export default editProfileSlice.reducer

export const editProfileSelector = (state) => state.editProfile

export function submitProfile(data) {
	return async (dispatch) => {
		dispatch(LOADING())

		try {
			const res = await axios.post("/api/profile/new-profile", data)
			dispatch(SUBMITING_PROFILE_SUCCESS())
		} catch (error) {
			dispatch(SUBMITING_PROFILE_FALIUR(JSON.stringify(error.response)))
		}
	}
}
