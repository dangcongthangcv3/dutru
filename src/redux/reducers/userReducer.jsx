// rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLogin: {
        email: '',
        accessToken: ''
    }
}

const userReducer = createSlice({
    name: initialState,
    initialState,
    reducers: {
        loginAction: (state, action) => {
            const userLogin = action.payload;
            state.userLogin = userLogin
        }
    }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer