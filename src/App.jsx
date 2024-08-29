
import './App.css'
import NavBar from './Components/Nav-bar/navBar';
import React from 'react';
import TermOfUse from './components/TermofUse/termOfUse';
import PrivacyPolicy from './components/Privacypolicy/privacyPolicy';
import AboutUs from './components/AboutUs/aboutUs';
import Footer from './components/LandingPage/FooterSection/footerSection';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/LandingPage/Landing/landingPage';


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

export default App

