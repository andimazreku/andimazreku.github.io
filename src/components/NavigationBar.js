// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="nav-cell-left">
        <Link to="/about" className="nav-text-left">andi mazreku</Link>
      </div>
      <div className="nav-cell-right">
        {/* <span className="nav-text-right">work</span> */}
        <Link to="/" className="nav-text-right">work</Link>
      </div>
      <div className="nav-cell-right">
        <Link to="/contact" className="nav-text-right">contact</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
