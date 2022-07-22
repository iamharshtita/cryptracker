import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
// import About from './About'
import { Link} from 'react-router-dom'

import './Navbar.css'

const NavbarLogout = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};
    return (
        
        <div className='header'>
            <div className='container'>
                <h1>Cryp<span className='primary'>Tracker</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/viewCoins'>Coins</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button  className='btn' onClick={handleLogout}>Logout</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
         
        

    )
}

export default NavbarLogout
