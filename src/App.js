import Expenses from './components/Expenses'

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
      <Expenses items={expenses}></Expenses>
      );
}

export default App;
