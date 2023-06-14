import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Statistics from './components/statistics/statistics'
import Accesories from './components/accesories/Accesories'
import Shirt from './components/shirt/Shirt'
import Footer from './components/footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Nav />
        <Statistics />
        <Accesories />
        <Shirt />
        <Footer />
    </>
  )
}

export default Home