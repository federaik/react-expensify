import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpensifyApp from './components/ExpensifyApp';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import HelpPage from './components/HelpPage';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense(
    {
        id: 1,
        name: 'Expense 1',
        desc: 'some text'
    }
))

console.log(store.getState());

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyApp} exact={true}/>
                <Route path="/create" component={CreatePage} />
                <Route path="/edit" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>      
        </div>      
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));