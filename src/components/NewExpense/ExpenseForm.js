import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
   
    const [userInput,setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''

    })
    const submitHandler = (event) => {
        event.preventDefault();
       const result ={
        id: Math.random(),
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date:new Date(userInput.enteredDate) ,
       }
       console.log(result)
        props.onSaveExpenseData(result)
    }
    const titleChangeHandler = (event) => {
       
        setUserInput((currentUserInput)=>{
            let newUserInput ={...currentUserInput, enteredTitle : event.target.value}
            
            return newUserInput
        })
        // setEnteredTitle(event.target.value)
    }
    
    const amountChangeHandler = (event) => {
        setUserInput((currentUserInput)=>{
            let newUserInput ={...currentUserInput, enteredAmount : event.target.value}
            
            return newUserInput
        })
        // setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setUserInput((currentUserInput)=>{
            let newUserInput ={...currentUserInput, enteredDate : event.target.value}
            
            return newUserInput
        })
        // setEnteredDate(event.target.value)
    }
    return (
        <form id="form" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max={new Date().toISOString().split('T')[0]}  value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;