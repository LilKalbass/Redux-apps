import {createStore} from "redux";

const reducerFn = (state = {counter: 0}, action) => {
    if(action.type === "Increase") {
        return {counter:state.counter + 1}
    }
    if(action.type === "Decrease") {
        return {counter:state.counter - 1}
    }
    if(action.type === "PlusTen") {
        return {counter:state.counter + action.payload}
    }
    if(action.type === "MinusTen") {
        return {counter:state.counter - action.payload}
    }

    return state;
};


const store = createStore(reducerFn);

export default store;