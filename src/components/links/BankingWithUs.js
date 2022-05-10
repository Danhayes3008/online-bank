import React from 'react';
import {NavLink} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

const BankingWithUs = () => {
  return (
    <ul>
        <li><NavLink to="#">Banking online<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Register for online Business<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Commercial Banking Online<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Mobile banking<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Sector service and support<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Make a payment online<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Accepting card payments<BsFillCaretRightFill /></NavLink></li>
    </ul>
  )
}

export default BankingWithUs