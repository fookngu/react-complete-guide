import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = ({id, date, name, amount}) => {

    const [title, setTitle] = useState(name)

    const changeTitleHandler = ()=> {
      setTitle(name + " has changed")
      console.log(title) // this still shows the old value. React does schedule a value update but not do it right away
    }
    return (
    <Card className="expense-item">
      <input type='hidden' value={id}></input>
      <ExpenseDate date = {date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
