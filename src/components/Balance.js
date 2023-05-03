import React from 'react';
import {useSelector} from "react-redux";

const Balance = () => {
    const {balance, quote} = useSelector(state => state.account);

    return (
        <div>
            <h1 className={'text-center text-uppercase'}>Bank</h1>
            <h4 className={'text-center text-uppercase'}>{quote}</h4>
            <h3 className={'text-center text-uppercase'}>Balance = {balance}</h3>
        </div>
    );
};

export default Balance;
