import React from 'react';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="nav">
                <a href="/shop">Shop</a><a href="/order"> Order</a><a href="/review">Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;