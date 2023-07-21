import { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020')
  const onYearSelectedHandler = (year) => {
    setSelectedYear(year)
    console.log(year)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onYearSelected={onYearSelectedHandler}/>
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
};

export default Expenses;
