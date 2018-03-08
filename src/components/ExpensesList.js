import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import configureStore from '../store/configureStore';
import { filterVisibleExpenses } from '../actions/filters';

const store = configureStore();


const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        <ul>
        {
            props.expenses.map((expense, key) => 
                <ExpenseListItem key={key} {...expense} />
            )
        }
        </ul>
    </div>
)

store.dispatch(filterVisibleExpenses());
console.log(store.getState())

const mapStoreToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStoreToProps)(ExpenseList);