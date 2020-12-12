import React from 'react'
import './header.css'
import LOGO from "../Assets/images/trippinLogo.JPG"
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
        <Link to='/'>
            <img
                className="header__icon"
                src={LOGO}
                alt=""
            />
        </Link>
       
        <div className='header__center'>
            <input type="text" placeholder = "Type to search" />
       
        </div>

        <div className='header__right'>
            <p>LogIn</p>
            <p>Signup</p>
        </div>
    </div>
)
}

export default Header;
