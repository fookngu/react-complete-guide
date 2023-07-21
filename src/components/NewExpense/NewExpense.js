import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseHandler = (inputExpenseData) => {
        const newExpense = {
            ...inputExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpenseSubmitted(newExpense)
    }
    return(
        <div className="new-expense card">
            <ExpenseForm onSaveNewExpense={saveExpenseHandler}/>
        </div> 
    )
}

export default NewExpense