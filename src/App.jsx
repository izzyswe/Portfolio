//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
      <i class="fab fa-solid fa-lightbulb icon"></i>
    </>
  )
}


