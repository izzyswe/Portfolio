import '../App.css'
import AboutMe from './MainContent/AboutMe.jsx'
import Projects from './MainContent/Projects.jsx'
import ContactMe from './MainContent/ContactMe.jsx'

export default function MainContent(){
  return(
    <main>
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  )
} 
