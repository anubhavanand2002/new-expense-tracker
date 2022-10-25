import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
export default function NewExpense(props) {
  const[isEditing,setIsEditing]=useState(false);
    function saveExpenseHandler(enteredExpenseData)
    {
      const expenseData={
          ...enteredExpenseData,
          id:Math.random().toString()
      }
      props.onAddExpenseData(expenseData);
    }
    
    function startEditingHandler()
    {
      setIsEditing(true);
    }
    function stopEditingHandler()
    {
      setIsEditing(false);
    }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}
