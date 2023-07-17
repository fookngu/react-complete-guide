import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses