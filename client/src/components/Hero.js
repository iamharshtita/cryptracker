import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    {/* <p>Buy & Sell Crypto 24/7 using your retirement account</p> */}
                    <h1>Keep track of your coins using <h1>'Cryp<span className='primary'>Tracker</span>'</h1></h1>
                    <p>Store, view, and have a dig at hundreds of cryptocurrencies.</p>
                    <br/>
                    <p>Launching soon...</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <Link to='/signup' className='btn'>Sign-Up</Link>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
