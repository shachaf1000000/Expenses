
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import Card from '../../components/UI/Card'
const NewExpense = (props) => {
    // props.onAddExpense(...)
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={props.onAddExpense}/>
        </div>
    )
}

export default NewExpense
