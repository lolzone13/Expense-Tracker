import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((item) => {
                    return (
                        <Transaction key={item.id} transaction={item} />
                    )
                })}

            </ul>
        </div>
    )
}

export default TransactionList
