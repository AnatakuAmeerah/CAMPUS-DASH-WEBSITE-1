
import './App.css'
import NavBar from './Components/Nav-bar/navBar';
import React from 'react';
import TermOfUse from "./Components/TermofUse/termOfUse";
import AboutUs from "./Components/AboutUs/aboutUs";
import Footer from "./Components/LandingPage/FooterSection/footerSection";
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/LandingPage/Landing/landingPage';
import PrivacyPolicy from "./Components/Privacypolicy/privacyPolicy";


function App() {

  return (
    <>
     <NavBar/>
     <div className='routes-container'>
      <Routes>
        <Route path='/term-of-use' element={<TermOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/" element={<Landing/>} />
      </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App;

