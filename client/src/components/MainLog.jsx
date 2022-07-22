import React from "react";
import Featured from './Featured'
import Hero from './Hero'
import NavbarLogout from "./NavbarLogout";
import Signup from './Signup'
import Footer from './Footer'


const MainLog=()=>{
    return(
        <>
        <NavbarLogout/>
        {/* <Hero/> */}
        <Featured/>
        <Signup/>
        <Footer/>
        </>
    )
}

export default MainLog;