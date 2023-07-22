import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  let excludedYear = "2019, 2021, 2022";
  const onYearSelectedHandler = (year) => {
    setSelectedYear(year);
  };

  if (selectedYear === "2019") {
    excludedYear = "2020, 2021, 2022";
  } else if (selectedYear === "2020") {
    excludedYear = "2019, 2021, 2022";
  } else if (selectedYear === "2021") {
    excludedYear = "2019, 2020, 2022";
  } else {
    excludedYear = "2019, 2020, 2021";
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearSelected={onYearSelectedHandler}
      />
      <p style={{color: 'white'}}>Data for {excludedYear} is hidden</p>
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
