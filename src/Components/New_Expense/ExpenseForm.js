import React,{useState} from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
   const[enteredtitle,setenteredtitle] =useState('');
   const[enteredamount,setenteredamount] =useState('');
   const[entereddate,setentereddate] =useState('');
   function titlehandler(event)
   {
    setenteredtitle(event.target.value);
   }
   function amounthandler(event)
   {
    setenteredamount(event.target.value);
   }
   function datehandler(event)
   {
    setentereddate(event.target.value);
   }
 function HandleAdd(event)
 {
    event.preventDefault();
    const expenseData={
        title:enteredtitle,
        date:new Date(entereddate),
        amount:Number(enteredamount),
    }
    props.onSaveExpenseData(expenseData);
    setenteredtitle("");
    setenteredamount("");
    setentereddate("");
 }
  return (
    <form className='back' onSubmit={HandleAdd}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titlehandler} value={enteredtitle}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' onChange={amounthandler} value={enteredamount}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={datehandler} value={entereddate}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
              <button type='button' onClick={props.onCancel}>Cancel</button>
              <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}
