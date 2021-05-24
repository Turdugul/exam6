import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Books</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About" exact className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contacts" exact className="nav-link">Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Register" exact className="nav-link">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;