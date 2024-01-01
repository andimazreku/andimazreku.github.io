// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="nav-cell nav-cell-right">
        <Link to="/about" className="nav-text">andi mazreku</Link>
      </div>
      <div className="nav-cell nav-cell-right">
        {/* <span className="nav-text-right">work</span> */}
        <Link to="/" className="nav-text">work</Link>
      </div>
      <div className="nav-cell nav-cell-right">
        <Link to="/contact" className="nav-text">contact</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
