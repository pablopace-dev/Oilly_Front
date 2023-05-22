import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({

    name: 'user',

    initialState: {

        user: {},
        status: 'non-authenticated',
        errorMessage: undefined,
        recycles: [],
        prevPoints: 0,
        points: false,
        qrValue: '',
        coords: {},
        isLocating: false

    },

    reducers: {

        onLogin: (state, action) => {

            state.user = action.payload;
            state.errorMessage = [];
            state.status = 'authenticated';
        },

        onLocating: (state, { payload }) => {

            state.isLocating = true;
        },

        onLoadPrevPoints: (state, { payload }) => {

            state.prevPoints = payload;
        },

        onLoadRecycles: (state, { payload }) => {

            state.recycles = payload;
        },

        onLoadPoints: (state, { payload }) => {

            state.points = payload;
        },


        onLoadCoords: (state, { payload }) => {

            state.coords = payload;
            state.isLocating = false;
        },

        onLogout: (state, action) => {

            state.user = {};
            state.errorMessage = [];
            state.status = 'non-authenticated';
        },

        onRegister: (state, action) => {

            state.user = action.payload;
            state.errorMessage = [];
            state.status = 'authenticated'
        },

        onError: (state, action) => {

            state.user = {};
            state.errorMessage = action.payload;
        },

    }
})


export const {
    onLogin,
    onLocating,
    onLogout,
    onLoadPrevPoints,
    onLoadCoords,
    onRegister,
    onLoadPoints,
    onLoadRecycles,
    onError,
} = userSlice.actions;


