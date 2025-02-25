import { createSlice } from '@reduxjs/toolkit';
import { drumPad, loops } from './variables';

const drumSlice = createSlice({
    name: 'drumPad',
    initialState: {
        drumPad: drumPad,
        loops: loops,
        currentPad: null,
        currentLoop: null
    },
    reducers: {
        drumPadReducer: (state, action) => {
            state.currentPad = action.payload;
        },
        loopReducer: (state, action) => {
            state.currentLoop = action.payload;
        },
        stop: (state) => {
            state.currentLoop = null;
            state.currentPad = null;
        }
    }
});

export const { drumPadReducer, loopReducer, stop } = drumSlice.actions;
export default drumSlice.reducer;