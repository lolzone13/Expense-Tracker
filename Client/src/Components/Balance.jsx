import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function Balance() {
    const { transactions } = useContext(GlobalContext);
    let totalAmount = 0;

    for(let i = 0; i<transactions.length; i++) {
        totalAmount+=(transactions[i].amount);
    }

    totalAmount = totalAmount.toFixed(2);


    return (
        <div>
            <h4 className="balance"> YOUR BALANCE </h4>
            <h1 className="balance-amount">${totalAmount}</h1>
        </div>
    );
}

export default Balance;
