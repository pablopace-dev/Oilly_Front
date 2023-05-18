import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',

    initialState: {

        user: {},
        status: 'non-authenticated',
        errorMessage: undefined
    },

    reducers: {

        onLogin: (state, action) => {

            console.log('esto es action', action)
            
            state.user = action.payload,
            state.errorMessage = {},
            state.status = 'authenticated'
        },

        onLogout: (state,action) => {

            state.user = {};
            state.errorMessage = action.payload;
            state.status = 'non-authenticated'
        },

        onRegister: (state,action) => {

            state.user = action.payload;
            state.errorMessage = {},
            state.status = 'authenticated'
        },

        onError: (state,action) => {

            state.user = {};
            state.errorMessage = action.payload
        }
    }
})

export const { onLogin, onLogout, onRegister, onError } = userSlice.actions;