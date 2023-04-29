export const PUT_QUOTE = "PUT_QUOTE";
export const QUOTE_REQUEST = "QUOTE_REQUEST";
export const QUOTE_ERROR = "QUOTE_ERROR";

export const quoteErrorAction = () => (
    {
        type: QUOTE_ERROR,
        payload: "Error",
    }
);

export const quoteRequestAction = () => (
    {
        type: QUOTE_REQUEST,
        payload: "Loading...",
    }
);

export const getQuoteAction = () => {
    return (dispatch) => {
        dispatch(quoteRequestAction());
        fetch("https://api.kanye.rest/")
            .then(response => {
                if (response.ok)
                return response.json();
                dispatch(quoteErrorAction());
            })
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(e => dispatch(quoteErrorAction()))
    }
};

export const putQuoteAction = quote => ({
    type: PUT_QUOTE,
    payload: quote,
});
