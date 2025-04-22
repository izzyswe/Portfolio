import React, { useState, useEffect } from 'react'
import '../App.css'
import pfp from '../assets/profile.png'
//import MainContent from './MainContent.jsx'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
      if (window.innerWidth > 820) {
        setMenuOpen(false); // auto-close mobile menu if resizing to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <a href='#'>
        <img src={pfp} className='logo' alt="logo" />
      </a>

      {isMobile && (
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      )}

      <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"}>
        <ul className={`navBar ${menuOpen ? "show" : "hide"}`}>
          <li><a href="#aboutMe" onClick={() => setMenuOpen(!menuOpen)}>About Me</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>Projects</a></li>
          <li><a href="#contactMe" onClick={() => setMenuOpen(!menuOpen)}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  )
}
