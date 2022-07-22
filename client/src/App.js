import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main'
import About from './components/About'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login/Login'
import Create from './components/Singup/Create'
import NavbarLogout from './components/NavbarLogout'
import MainLog from './components/MainLog'
import NavbarW from './components/NavbarW'

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const user = localStorage.getItem("token");
  console.log(user);
  return (

    <BrowserRouter>
      <Routes>
      {user && <Route path="/" exact element={<MainLog />} />}
        <Route exact path='/' element={<Main/>}/>
       {user && <Route exact path='/about' element={<><NavbarW/> <About/> <Footer/></>}/>}
       <Route exact path='/about' element={<><Navbar/> <About/> <Footer/></>}/>
      {user && <Route exact path='/viewCoins' element={<><NavbarW/> <Coins coins={coins}/> <Footer/></>}/>}

        <Route path='/coin' element={<><NavbarW/> <Coin /> <Footer/></>}>
          <Route path=':coinId' element={<Coin/>} />
        </Route>
      {user &&  <Route path='/contact' element={<><NavbarW/> <Contact/> <Footer/> </>}/>}
      <Route exact path='/contact' element={<><Navbar/> <Contact/> <Footer/></>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
