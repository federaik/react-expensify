import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { Provider } from 'react-redux';
import configureStore from './fetch-configure-store';
import ListItem from './fetch-list-items';

class FetchItems extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }        
    }

    componentDidMount() {
        //this.fetchItems();
    }

    fetchItems() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(items => this.setState({items}));
    }

    render(){
        return (<div>
            <ListItem />
        </div>)
    }
}

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <FetchItems />
    </Provider>
    , document.getElementById('app'));
