import React from 'react'
import NavBar from './Components/Navbar/NavBar';
import About from './Components/About/About';
import Owner from './Components/Owner/Owner';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
const HomePage = () => {
  return (
    <div>
    <NavBar/>
    <About/>
    <Cards/>
    <Owner/>
    <Footer/>
    </div>
  )
}

export default HomePage
