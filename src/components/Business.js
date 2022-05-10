import React from 'react';
import {NavLink} from "react-router-dom";

// Components
import HelpAndSupport from "./links/HelpAndSupport";
import ProductAndServices from './links/ProductAndServices';
import BankingWithUs from './links/BankingWithUs';


const Business =() => {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <NavLink to="/Personnel">Bank of England</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/Help">Help & Support</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row">
          <div className="card1">
            <div className="savings-icon">
            </div>
            <div className='savings-text'>
              <div className='savings-title'><h5>Savings & Deposits</h5></div>
            </div>
            <div className='savings-link'>
              <NavLink to="/savings">View all savings accounts</NavLink>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="card3">
            <h5>Products & services</h5>
            <ProductAndServices />
          </div>
          <div className="card3">
            <h5>Banking with us</h5>
            <BankingWithUs />
          </div>
          <div className="card3">
            <h5>Help and support</h5>
            <HelpAndSupport />
          </div>
        </div>
        <div className="row">
          <div className="card1">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;