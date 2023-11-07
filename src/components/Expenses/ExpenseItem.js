import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'
import { useState } from 'react';


const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const buttonHandler = () => {
        setTitle('Pakistan');
        console.log(props.title + 'I am clicked')
    } 

    return (
        <>
        <Card>
        <div className="expense-item">
            <div><ExpenseDate /></div>
            <h2 className='expense-item__description'>{title}</h2>
            <div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={buttonHandler}> Change {props.title} Title</button>
        </div></Card></>
    )
}
export default ExpenseItem;