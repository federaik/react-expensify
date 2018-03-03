import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
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
));

store.dispatch(addExpense(
    {
        id: 2,
        name: 'Expense 2',
        desc: 'lorem ipsum, pa'
    }
))

console.log(store.getState());

const routes = (
    <Provider store={store}>
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
    </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));