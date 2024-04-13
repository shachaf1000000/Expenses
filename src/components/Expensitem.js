import { useState } from 'react';
import ExpensesDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './UI/Card'
function ExpensesItem(props) {
  
    const [title, setTitle] = useState(props.expense.title)
    
   
    return (
        <Card className="expense-item">
            <ExpensesDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expense.amount}$</div>
            </div>
           
        </Card>
    );
}

export default ExpensesItem;