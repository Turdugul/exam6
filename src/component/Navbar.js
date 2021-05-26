import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import {connect} from 'react-redux'

const Navbar = ({searchBook}) => {
    const onSearch = ({search})=> {
        searchBook(search)
    }
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
                <Search onSubmit={onSearch} />
            </div>
        </nav>
    );
};

 

 const msp = ({search}) => {
    return {search}
}
 const searchBook=(search)=>{
     return {
         type:"SEARCH",
         search
     }
 }
export default connect(msp,{searchBook})(Navbar);
