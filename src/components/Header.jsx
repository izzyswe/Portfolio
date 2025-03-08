import '../App.css'
import pfp from '../assets/profile.png'
import MainContent from './MainContent.jsx'

export default function Header(){
  return (
    <header>
      <img src={pfp}  className='logo' alt="logo" />
      <nav>
        <ul className='navBar'>
          <li><a href="#contactMe">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactMe">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  )
}
