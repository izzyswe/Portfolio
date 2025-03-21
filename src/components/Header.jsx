import '../App.css'
import pfp from '../assets/profile.png'
import MainContent from './MainContent.jsx'

export default function Header(){
  return (
    <header>
      <a href='#'>
        <img src={pfp} className='logo' alt="logo" />
      </a>
      <nav>
        <ul className='navBar'>
          <li><a href="#aboutMe">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactMe">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  )
}
