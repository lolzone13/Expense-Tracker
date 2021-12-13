import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);
    let income = 0
    let expense = 0

    transactions.forEach((element) => {
        if (element.amount>0) income+=element.amount;
        else expense+=element.amount;
    })

    return (
        <div className="inc-exp-container">
            <div className='income'>
                <h4>INCOME</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div className='expense'>
                <h4>EXPENSE</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;
