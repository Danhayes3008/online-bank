import React from 'react';
import {NavLink} from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

const PersonalHelpAndSupport = () => {
  return (
    <ul>
        <li><NavLink to="#">Money Worries<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Covid help and support<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Brexit questions and answers<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Lost or stolen cards<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Trouble logging on?<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Help with bereavement<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Customer support<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Unrecognised transaction<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Rates and charges<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Keep yourself secure<BsFillCaretRightFill /></NavLink></li>
        <li><NavLink to="#">Ring fencing and Lloyds bank<BsFillCaretRightFill /></NavLink></li>
    </ul>
  );
}

export default PersonalHelpAndSupport;