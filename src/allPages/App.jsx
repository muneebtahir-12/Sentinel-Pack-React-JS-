import { useEffect, useRef, useState } from 'react'
import Header from '../../allComponents/common/Header'
import Footer from '../../allComponents/common/Footer'
import Banner from '../../allComponents/common/Banner'
import About from '../../allComponents/home/HomeAbout'
import CleaningPack from '../../allComponents/home/CleaningPack'
import AboutCompany from '../../allComponents/home/AboutCompany'
import Products from '../../allComponents/home/OurProducts'
import Kit from '../../allComponents/home/IntravertialKit'
function App() {
  return (
    <>

      <Header />
      <About />
      <CleaningPack />
      <AboutCompany />
      <Products />
      <Kit />
      <Banner />
      <Footer />

    </>
  )
}


export default App;
