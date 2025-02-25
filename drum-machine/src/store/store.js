import { configureStore } from "@reduxjs/toolkit";
import drumReducer from "./slice";

const store = configureStore({
    reducer: {
        drumPad: drumReducer
    }
})

export default store;