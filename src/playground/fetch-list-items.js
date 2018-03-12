import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './fetch-actions';

class ListItems extends Component {
    render(){
        return (
            <div>
                connect to store inside ListItems
            </div>
        )
    }
}

export default ListItems;

