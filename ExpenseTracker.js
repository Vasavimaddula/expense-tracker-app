import React, { useState, useEffect} from 'react';

import Expense from './Expense';
import TrasactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';

//import { uniqueId } from '../utils';

//This is our Aggregator Component (or) Container Component

const transactionData = [
    
];


function ExpenseTracker() {

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState(transactionData);


    const saveState = () => {
        localStorage.setItem('expenseTrackerState', 
        JSON.stringify(transactions));
    }
    

    const calculateExpenses = () => {
        let income = 0, expense = 0;

        transactions.forEach((data) =>{
            if (data.type === 'income') {
                income += data.amount;
            }
            else if (data.type === 'expense' ) {
                expense += data.amount;
            }
        });

        saveState();

        //console.log(income, expense);

        setIncome(income);
        setExpense(expense);

    }

    const handleAddNewTransaction = item => {
        let newTransactions = [...transactions, item];
        setTransactions(newTransactions);
    }

    const handleDeleteTransaction = id => {
        const newTransactions = transactions.filter((item) => item.id !== id);
        setTransactions(newTransactions);
    }

    useEffect(() => {
        let localState = JSON.parse(localStorage.getItem('expenseTracker'));
        if (localState) {
            setTransactions(localState);
        } else {
            calculateExpenses();
        }
    }, []
    );

    useEffect(() => {
        calculateExpenses();
    }, 
    );


    return(
        <div>
           <h1>Expense Tracker</h1>
           <Expense income={income} expense={expense} />
           <TrasactionHistory transactions = {transactions} 
           onDeleteTransaction= {handleDeleteTransaction} />
           <TransactionForm onNewTransaction = {handleAddNewTransaction} />
        </div>
    )
}

export default ExpenseTracker;