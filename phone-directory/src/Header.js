import React from 'react';

const headerStyle = {
    textAlign: 'center',
    color: "white",
    background: "black",
    padding: 20,
    textTransform: 'uppercase'
}

const Header = function () {
    return (
        <div style={headerStyle}>Phone Directory</div>
    )
}

export default Header;