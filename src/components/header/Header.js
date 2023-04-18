import React from 'react';
import InputBox from '../shared/ui/inputBox/InputBox';
import './header.css'
const Header = ({ handleSearchChange }) => {
    return (
        <header className="header">
            <h1>Task Manager</h1>
            {/* search form */}
            <form action="">
                <InputBox onChange={handleSearchChange} placeholder="Search" />
            </form>
        </header>
    );
};

export default Header;