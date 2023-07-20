import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = () => {
    return(
        <div className="new-expense card">
            <ExpenseForm/>
        </div> 
    )
}

export default NewExpense