import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2023, 5, 31),
      name: "Car Insurance",
      amount: "S$ 294.67",
    },
    {
      id: 1,
      date: new Date(2023, 4, 1),
      name: "Grocery shopping",
      amount: "S$ 50",
    },
    {
      id: 1,
      date: new Date(2023, 5, 12),
      name: "Mobile plan",
      amount: "S$ 10.00",
    },
  ];

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
