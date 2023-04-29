import accountReducer from "../reducers/accountReducer";
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const initialState = {
    balance: 0,
    quote: "Future is coming"
}

const store = createStore(
    accountReducer,
    initialState,
    applyMiddleware(thunk, logger)
);

export default store;
