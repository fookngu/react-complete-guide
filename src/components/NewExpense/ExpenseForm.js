import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [inputTitle, setInputTitle] = useState('')
  // const [inputAmount, setInputAmount] = useState('')
  // const [inputDate, setInputDate] = useState('')
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputDate: event.target.value,
      };
    });
  };

  const clearForm = () => {
    setUserInput((prevState) => {
      return {
        inputTitle: '',
        inputAmount: '',
        inputDate: ''
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput)
    clearForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={userInput.inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={userInput.inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2023-07-01"
            max="2025-07-31"
            value={userInput.inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
