import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component {    
    render(){
        return (
            <div style={this.props.style}>
                <h1>404 - Not Found</h1>
                <Link to="/">Go Home</Link>
            </div>
        )
    }
}

NotFoundPage.defaultProps = {
    style: {
        background: '#ddd',
        fontFamily: 'Courier'
    }
}