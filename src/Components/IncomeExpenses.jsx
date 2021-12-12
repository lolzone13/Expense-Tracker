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
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;
