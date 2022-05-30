import React from "react";

function Expense({ income, expense }) {
    return(
        <div>
           <div>
                <h2>Your Balance</h2>
                <div className='balance-val'>${income - expense}</div>
           </div>
           <div className='row row-expense'>
                <div className='col col-income'>
                    <span>
                        <h3>Income</h3>
                        <div className='income-text'>${income}</div>
                    </span>
                </div>
                <div className='col col-expense'>
                    <span>
                        <h3>Expense</h3>
                        <div className='expense-text'>${expense}</div>
                    </span>
                </div>
           </div>
        </div>
    )
}

export default Expense;