import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    quote: "Future is coming"
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        depositAction: (account, action) => {
            account.balance = account.balance + action.payload;
        },
        withdrawAction: (account, action) => {
            const res = account.balance - action.payload;
            account.balance = (res < 0) ? account.balance : res;
        },
        putQuoteAction: (account, action) => {
            account.quote = action.payload;
        },
        quoteRequestAction: (account, action) => {
            account.quote = action.payload;
        },
        quoteErrorAction: (account, action) => {
            account.quote = action.payload;
        },
    },
});

const {actions, reducer} = accountSlice;
export const {
    depositAction,
    withdrawAction,
    putQuoteAction,
    quoteRequestAction,
    quoteErrorAction,
} = actions;
export const accountReducer = reducer;

export const getQuoteAction = () => {
    return (dispatch) => {
        dispatch(quoteRequestAction("Loading..."));
        fetch("https://api.kanye.rest/")
            .then(response => {
                if (response.ok)
                    return response.json();
                dispatch(quoteErrorAction());
            })
            .then(data => {dispatch(putQuoteAction(data.quote))})
            .catch(e => dispatch(quoteErrorAction(e.toString())))
    }
};
