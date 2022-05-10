import React from 'react';
import {NavLink} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

const InternetBanking = () => {
  return (
    <ul>
        <li><NavLink to="#">Log on to internet Banking<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Forgotten your log on details?<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Register for internet banking<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Online help<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Mobile banking<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Self service<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Have an account with us?<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">About internet banking<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Help with online statements<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Send money abroad<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Card freeze<BsFillCaretRightFill /></NavLink></li>
    </ul>
  );
}

export default InternetBanking;