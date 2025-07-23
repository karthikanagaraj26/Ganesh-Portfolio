import React from 'react'
import Herosection from '../Components/Home/Herosection'
import Header from '../Components/Header'
import About from '../Components/Home/About'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div>
        <Header/>
        <div id="home">
      <Herosection/>
      </div>
      <div id="services">
      <About/>
      </div>
      <div id="education" >
      <Footer/>
      </div>
    </div>
  )
}

export default Home
