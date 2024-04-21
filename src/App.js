import logo from './logo.svg';
import './App.css';
import ExpensesItem from './components/Expensitem';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
import { useState } from 'react/cjs/react.development';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
  },
];

function App() {
 const [currentExpenses,setCurrentExpenses]=useState(DUMMY_DATA)
  const addExpenseHandler = (userInput) => {
    setCurrentExpenses((oldExpensesData) => {
      return [...oldExpensesData,userInput];
    })
  
  }
  return (
    <div className='app-wrapper'>
      <h1> Expenses app</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={currentExpenses}></Expenses>

    </div>
  );
}

export default App;
