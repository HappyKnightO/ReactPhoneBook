import React from 'react'
import '../styles/Header.css';

const Header = () => {
    const onClick = () => {
     console.log("hey")
    };
    return (
        <header>
            <h1 className='title'>Phone book</h1>
        </header>
    )
}

export default Header