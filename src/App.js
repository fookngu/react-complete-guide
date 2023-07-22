import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initialExpenses = [
    {
      id: 1,
      date: new Date(2023, 5, 31),
      name: "Car Insurance",
      amount: "S$ 294.67",
    },
    {
      id: 2,
      date: new Date(2023, 4, 1),
      name: "Grocery shopping",
      amount: "S$ 50",
    },
    {
      id: 3,
      date: new Date(2023, 5, 12),
      name: "Mobile plan",
      amount: "S$ 10.00",
    },
  ];
  const [expenses] = useState(initialExpenses)
  const addOneExpense = (expense) => {
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onNewExpenseSubmitted={addOneExpense}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
  // the following line would do the same thing
  // return React.createElement(Expenses, {items: expenses})
}

export default App;
