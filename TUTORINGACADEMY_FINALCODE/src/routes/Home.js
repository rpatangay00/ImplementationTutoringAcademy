import React from 'react'
import  Navbar  from '../components/Navbar'
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"
import Carousel from '../components/Carousel'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Home