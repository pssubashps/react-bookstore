import React from 'react';
import { NavLink } from 'react-router-dom'
const header = (props) => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Bookstore</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to='/' exact>Home</NavLink></li>
                    <li><NavLink to='/checkout'>Checkout</NavLink></li>
                   
                </ul>
            </div>
        </nav>
    );
}

export default header;