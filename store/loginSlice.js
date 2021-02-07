import {createSlice} from '@reduxjs/toolkit'
import {fetchUser} from './user'
import axios from 'axios';

const loginSlice = createSlice({
    name: "login",
    initialState:{
        hasErrors: false,
        errMessage: null,
        loading: false,
        sucess: false
    },
    reducers:{
        loggingIn: (state, {payload}) =>{
            state.loading = true
        },
        loginSucess: (state, {payload}) => {
            state.sucess = true
            state.loading = false,
            state.hasErrors = false
        },
        loginFailuer: (state, {payload}) => {
            state.loading = false,
            state.hasErrors = true,
            state.errMessage = payload
        }
    }
})

export const {loggingIn, loginSucess, loginFailuer} = loginSlice.actions
export default loginSlice.reducer
export const loginSelector = state => state.login

export function loginSubmit (email, password) {
    return async dispatch =>{

        dispatch(loggingIn())

        try {
            const res = await axios.post("/api/user/login", {email, password})
            localStorage.setItem("token", res.data.token)
            dispatch(loginSucess())
            // dispatch(fetchUser())

        } catch (error) {
            dispatch(loginFailuer(error.response.data.msg))
        }
    }
}