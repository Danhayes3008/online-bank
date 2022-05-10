import React from 'react';
import {NavLink} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

const OurProducts = () => {
  return (
    <ul>
        <li><NavLink to="#">Current Accounts<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Credit Cards<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Loans<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Car Finance<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Savings<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">ISAs<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Investing<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Pensions<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Home Insurance<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Car Insurance<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Van Insurance<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Morgages<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Life Insurance<BsFillCaretRightFill /></NavLink></li>
    </ul>
  );
}

export default OurProducts;