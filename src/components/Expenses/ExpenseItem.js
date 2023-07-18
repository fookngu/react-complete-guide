import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


function ExpenseItem({id, date, name, amount}) {
    return (
    <Card className="expense-item">
      <input type='hidden' value={id}></input>
      <ExpenseDate date = {date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{name}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
