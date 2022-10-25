import React,{useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/New_Expense/NewExpense';
const INITIAL_EXPENSE=[
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
]

function App() {
  const[expenses,setexpenses]=useState(INITIAL_EXPENSE);
  function addExpenseHandler(expense)
  {
    setexpenses([...expenses,expense]);
  }
  
  return (
    <div>
      <div className='backchange'></div>
      <div>
        <h2>Let's get started</h2>
        <NewExpense onAddExpenseData={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;
