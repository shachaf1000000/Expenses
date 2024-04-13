import ExpensesItem from "./Expensitem"
import Card from "./UI/Card"

const Expenses = (props) => {
return(
    <div>
      {props.expenses.map((expenseData)=>{
         
          return<ExpensesItem expense={expenseData}/>
      })}  
       
    </div>
)
}
export default Expenses