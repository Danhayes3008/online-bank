import React from 'react';
import {NavLink} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

const HelpAndSupport = () => {
  return (
    <ul>
      <li><NavLink to="#">Reduce cyber risk<BsFillCaretRightFill /></NavLink></li>
      <li><NavLink to="#">Prevent and report fraud<BsFillCaretRightFill /></NavLink></li>
      <li><NavLink to="#">Covid support<BsFillCaretRightFill /></NavLink></li>
      <li><NavLink to="#">I'm having problems logging in<BsFillCaretRightFill /></NavLink></li>
      <li><NavLink to="#">Managing accounts access<BsFillCaretRightFill /></NavLink></li>
      <li><NavLink to="#">Financial difficulty support<BsFillCaretRightFill /></NavLink></li>
      <li><NavLink to="#">Stolen cards support<BsFillCaretRightFill /></NavLink></li>
    </ul>
  )
}

export default HelpAndSupport