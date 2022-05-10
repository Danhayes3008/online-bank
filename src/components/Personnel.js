import React from 'react';
import {NavLink} from "react-router-dom";
import banner from '../images/BankofEngland.jpg';
import { BsCash } from "react-icons/bs";

// Components
import PersonalHelpAndSupport from "./links/PersonalHelpAndSupport";
import OurProducts from './links/OurProducts';
import InternetBanking from './links/InternetBanking';

const Personnel =() => {
  return (
    <div className='App'>
      <nav className='bottom-nav'>
        <ul>
          <li>
            <NavLink to="/Personnel">Bank of England</NavLink>
          </li>
        </ul>
        <ul className='nav-list-2'>
          <li>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/Help">Help & Support</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <img className='banner-img' src={banner} alt="" />
      </div>
      <div className="row banner">
          <div className="row card g-1-banner">
            <div className='savings-link card g-2'>
              <div className='savings-link-title'>
                <h1>We're always by your side</h1>
              </div>
              <div>
                <NavLink to="/savings">View all savings accounts</NavLink>
              </div>
            </div>
            <div className='banner-login card g-2'>
              <ul>
                <li>
                  <h2>Login into Internet Banking</h2>
                  <a className='login-btn' href="#">Login</a>
                  <a className='register-btn' href="#">Register</a>
                </li>
                <li>
                <a href="#">See how much you could borrow with a loan</a>
                </li>
                <li>
                <a href="#">Checkyour credit card eligibility</a>
                </li>
                <li>
                  <a href="#">Make the most of the new ISA allowance</a>
                </li>
                <li>
                  <a href="#">Take a look at our 10 year fixed rate mortgages</a>
                </li>
              </ul>              
            </div>
          </div>
        </div>
      <div className="container">
        <div className='row'>
          <div className="card g-3">
            <h2 className='text-center'>Our Products</h2>
            <hr />
            <OurProducts />
          </div>
          <div className="card g-3">
            <h2 className='text-center'>Help and support</h2>
            <hr />
            <PersonalHelpAndSupport />
          </div>
          <div className="card g-3">
            <h2 className='text-center'>Internet Banking</h2>
            <hr />
            <InternetBanking />            
          </div>
        </div>
        <div className="row">
          <div className='card g-1'>
            <h2>Support with covid</h2>
            <span>Find out more about how we are <NavLink to='#'>supporting our customers during this pandemic</NavLink>.</span>
          </div>
        </div>
        <div className="row">
          <div className="card g-3 info">
            <div className='card-head'>
              <h2 className='text-center'>Quick and easy home insurance</h2>
            </div>            
            <div className='text-center'>
              <span className='text-center'>When it's time, insure with the bank you already trust. With new Home Insurance Select, you can get quote online in minutes with fewer questions to answer.</span>
            </div>
            <div className="btn">
              <NavLink to='#'><span>Get a quote</span></NavLink>
            </div>
          </div>
          <div className="card g-3 info">
            <div className='card-head'>
              <h2 className='text-center'>Smart start</h2>
            </div>            
            <div className="text-center">
              <span className='text-center'>Our new Spending and Savings Account for 11-15 year olds, with parental oversight.</span>
            </div>
            <div className="btn">
              <NavLink to='#'><span>Find out more</span></NavLink>
            </div>
          </div>
          <div className="card g-3 info">
            <div className='card-head'>
              <h2 className='text-center'>Arranged overdraft cost calculator</h2>
            </div>            
            <div className='text-center'>
              <span className="text-center">Use our arranged overdraft cost calculator to help you work out how much your anticipated arranged overdraft borrrowing will cost over different periods of time.</span>
            </div>
            <div className='btn'>
              <NavLink to='#'><span>Calculate cost</span></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personnel;