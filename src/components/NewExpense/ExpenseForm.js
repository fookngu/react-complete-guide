import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [inputDate, setInputDate] = useState('')
  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value)
    console.log(inputTitle, inputAmount, inputDate)
  }

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value)
    console.log(inputTitle, inputAmount, inputDate)
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
    console.log(inputTitle, inputAmount, inputDate)
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" name="amount" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" min="2023-07-01" max="2025-07-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
