import React,{useState} from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
export default function Expenses(props) {
    const[filteredYear,setfilteredYear]=useState(2020);
    function filterChangeHandler(selectedYear)
    {
       setfilteredYear(selectedYear);
    }
    const newadd=props.items.filter(check);
    function check(ch)
    {
      return ch.date.getFullYear()===Number(filteredYear);
    }
    // let expensescontent=<p>No Element Found</p>
    console.log(props.items + "is props.items");
  return (
    <div>
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseChart expenses={newadd}/>
        {newadd.length===0 && <p className="option">No Item Is Here</p>}
        {(newadd.length>0)&&
        newadd.map((expen)=>{
        return(
            <ExpenseItem
            key={expen.id} 
            title={expen.title} 
            date={expen.date} 
            amount={expen.amount}
            />
        );
       })}

    </Card>
    </div>
  )
}
