import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        error: null,
        isLogin: false,
    },
    reducers: {
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state) => {
            state.loading = false;
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state) => {
            state.loading = false;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        isLoginRequest: (state) => {
            state.isLogin = false
        },
        isLoginSuccess: (state, action) => {
            state.isLogin = action.payload

        },
        isLoginFail: (state, action) => {
            state.isLogin = false
        },




    }
})



export const { 
    registerRequest, registerSuccess, registerFail,
    loginRequest, loginSuccess, loginFail
    ,isLoginRequest, isLoginSuccess, isLoginFail
} = UserSlice.actions

export default UserSlice.reducer