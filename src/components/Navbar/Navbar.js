import React, { Component } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="nav">
            <nav>
                <div className="left">
                    <h1 className="logo">Z</h1>
                    <form className="search">
                        <button type="submit" className="icon"><FontAwesomeIcon icon={faSearch} /></button>
                        <input type="search" placeholder="Search" />
                    </form>
                </div>
            </nav>
        </div>
)}
export default Navbar;