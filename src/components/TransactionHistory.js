import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 Income
                    <span>$1,000</span>
                    <button className="delete-btn">x</button>
                </li>
                <li className="minus">
                Project 1 Expense
                <span>-$1,00</span>
                <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
