import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='App'>
        <nav className="top-nav">
            <div>
                <ul>
                  <li>
                    <NavLink className='personnelBanking' to="/">Personal</NavLink>
                  </li>
                  <li>
                    <NavLink className='BusinessBanking' to="/Business">Business</NavLink>
                  </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
