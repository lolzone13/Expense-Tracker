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
            <h4> Your Balance </h4>
            <h1>${totalAmount}</h1>
        </div>
    );
}

export default Balance;
