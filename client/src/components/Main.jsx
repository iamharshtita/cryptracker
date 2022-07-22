import React from "react";
import Featured from './Featured'
import Hero from './Hero'
import Navbar from './Navbar'
import Signup from './Signup'
import Footer from './Footer'

const Main=()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Featured/>
        <Signup/>
        <Footer/>
        </>
    )
}

export default Main;