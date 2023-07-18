import ExpenseItem from "./ExpenseItem";
import Card from "./Card"
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses