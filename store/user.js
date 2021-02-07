import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const initialState = {
    loading: false,
    userInfo: null,
    hasErrors: false,
    errMessage: null,
    loggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state, {payload}) =>{
            state.loading = true
        },
        getUserSucess: (state, {payload}) => {
            state.loading = false,
            state.userInfo = payload,
            state.loggedIn = true,
            state.hasErrors = false
        },
        getUserFailuer: (state, {payload}) => {
            state.loading = false,
            state.hasErrors = true,
            state.errMessage = payload
        }
    }
})



export const {getUser, getUserSucess, getUserFailuer} = userSlice.actions

export default userSlice.reducer

export const userSelector = state => state.user





export function fetchUser() {
    return async dispatch =>{
        dispatch(getUser())

        try {
            const res = await axios.get("/api/user/get-user")
            dispatch(getUserSucess(res.data))
        } catch (error) {
            console.log(error.response)
            dispatch(getUserFailuer())
        }
    }
}
