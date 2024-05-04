import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Namma Kudla</h1>
    <div className="nav-links"> 
      <Link to="/" className="nav-link" ><h1>Home</h1></Link>
      <Link to="/Destination" className="nav-link"><h1>Destination</h1></Link> 
      <Link to="/Beaches" className="nav-link"><h1>Beaches</h1></Link> 
      <Link to="/Religious" className="nav-link"><h1>Religious sites</h1></Link> 
      <Link to="/Parks" className="nav-link"><h1>Parks and Gardens</h1></Link> 
     
    </div>
  </nav>
);

export default Navbar;
