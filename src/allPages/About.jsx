import React from "react";
import Header from '../../allComponents/common/Header'
import Footer from '../../allComponents/common/Footer'
import  Banner from '../../allComponents/common/Banner'

import AboutUs from '../../allComponents/about/AboutUs'
import AboutCompany from "../../allComponents/about/AboutCompany";
import Vision from "../../allComponents/about/OurVision";
import Mission from "../../allComponents/about/OurMission"


function About() {
    return (
        <>
          <Header />
          <AboutUs />
        <AboutCompany />
        <Vision />
        <Mission />
        <Banner />
          <Footer />
        </>
    )
}
export default About;