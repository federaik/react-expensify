import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        <ul>
        {
            props.expenses.map((expense, key) => 
                (<li key={key}>{expense.name}</li>)
            )
        }
        </ul>
    </div>
)

const mapStoreToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStoreToProps)(ExpenseList);