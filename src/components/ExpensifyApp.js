import React from 'react';
import ExpenseList from './ExpensesList';

export default class ExpensifyApp extends React.Component {
    render(){
        return (
            <div>
                <h1>Landing page</h1>
                <ExpenseList />
            </div>
        )
    }
}
