import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class FetchItems extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }        
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(items => this.setState({items}));
    }

    render(){
        return (<div>
            <ul>
                {this.state.items.map((item, key) => {
                        return <li key={key}>{item.title}</li>;
                    })
                }
            </ul>
        </div>)
    }
}

ReactDOM.render(<FetchItems />, document.getElementById('app'));
