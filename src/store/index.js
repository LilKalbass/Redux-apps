import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter:0},
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        PlusTen(state, action) {
            state.counter += action.payload;
        },
        MinusTen(state, action) {
            state.counter -= action.payload;
        },
    }
})
export const actions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;