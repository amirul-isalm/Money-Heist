import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>MONEY <span>HEIST</span></h1>
            <h2>S E A S O N - 5 ( Volume 2 ) </h2>
           <h2 className="budget">Total Budget: $1000 M</h2>
        </div>
    );
};

export default Header;