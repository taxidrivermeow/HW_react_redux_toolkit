import React, {useState} from 'react';
import {depositAction, withdrawAction} from "../actions/accountActions";
import {useDispatch} from "react-redux";
import {getQuoteAction} from "../actions/quoteAction";

const Operation = () => {
    const dispatch = useDispatch();
    const [sum, setSum] = useState(0);

    return (

        <div className={'container'}>
            <div className={'d-flex justify-content-center'}>
                <button className={'btn btn-primary btn-lg'} onClick={() => dispatch(withdrawAction(sum))}>
                    Withdraw
                </button>
                <input className={'form-control-lg text-center'} type="number" min={0}
                       onChange={(e) => setSum(+e.target.value)}
                       value={sum}/>
                <button className={'btn btn-primary btn-lg'} onClick={() => dispatch(depositAction(sum))}>Deposit
                </button>
            </div>
            <div className={'d-flex justify-content-center'}>
                <button className={'btn btn-info btn-lg'} onClick={() => dispatch(getQuoteAction())}>Get quote</button>
            </div>
        </div>
    );
};

export default Operation;
