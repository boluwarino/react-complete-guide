import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    let title = props.title;

    const clickHandler = () => {
        title = 'Updated!';
        console.log('Updated!');
    }; /*best practice to not put too much logic within JSX code
        also, best practice to have the word handler in any function that handles an event 
        */
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>               
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;