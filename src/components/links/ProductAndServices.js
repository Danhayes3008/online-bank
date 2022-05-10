import React from 'react';
import {NavLink} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

const ProductAndServices = () => {
  return (
    <ul>
        <li><NavLink to="#">Business Accounts<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Accounting software<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Savings<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Loans<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Credit and Charge cards<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Invoice Finance<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Asset Finance<BsFillCaretRightFill /></NavLink></li>
    </ul>
  )
}

export default ProductAndServices