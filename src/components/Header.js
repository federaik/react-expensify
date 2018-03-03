import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div>
        <h1>Header</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/edit">Edit</Link></li>
            <li><Link to="/help">Help</Link></li>
        </ul>
    </div>
)

export default Header;