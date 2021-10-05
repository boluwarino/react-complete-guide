import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title); 
    /*react hooks can only be called inside component functions!
    the useState function takes one arg and returns a state variable [title] and a state updating function [setTitle]
    when the setTitle function is called, the whole component is then called again and the value is updated */
 
    const clickHandler = () => {
        setTitle('Updated'); //
        console.log(title);
    }; /*best practice to not put too much logic within JSX code
        also, best practice to have the word 'handler' in any function that handles an event.
        */
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;