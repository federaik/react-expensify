import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';

export default () => {

    const store = createStore(
        combineReducers({
            expenses: expensesReducer
        })
    );

    return store;
}