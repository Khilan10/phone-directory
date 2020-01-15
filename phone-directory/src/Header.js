import React from 'react';
import './Header.css'

const Header = function (prop) {
    return (
        <div className="header">{prop.heading}</div>
    )
}

export default Header;