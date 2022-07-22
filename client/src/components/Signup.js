import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Be a Crypto Rockstar</h2>
                    <p>Analyse and Keep Track of recent happenings in the crypto world.</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <a href='https://cryptonews.com/'  className='btn'>Learn More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
