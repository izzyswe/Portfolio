import "../../App.css"
import NeovimSS from "../../assets/projects/NeovimSS.png"
import Projects from "../MainContent/Projects.jsx"
import { useState } from "react"

export default function Neovim(){

  const [goBack, setGoBack] = useState(null)
  if(goBack == "Home"){
    return <Projects />
  }

  return(
  <div className="ProjectDescription">
        <img src={NeovimSS} alt="Lotte Project Screenshot" />
        <div>
          <h2>Neovim Replica Project</h2>
          <p>
            During my Second Semester at Georgian, I decided to fully commit into building a configuration for Neovim.
            When I was in my 5th semester at Centennial, I took a course in linux/shell scripting,
            and as part of the requirement, we were forced to use and learn vi or vim if you want some GUI-like experience. 
            I initially hated vim especially vi, I was so used to GUI-based editors (as you're taught to use) 
            such as VS IDE, VSCode or Android Studio. Vim and Vi was so foreign to me, so as a round about way, i used gedit.
            <br/> <br/>
            I only ever learned how to edit and exit out of vim. It wasn't until i stumbled upon
            a youtube video in my second semester at Georgian, someone was talking about Neovim, 
            and how you could turn into an IDE-like experience. It convinced me to try vim once again but in another fork (Neovim) 
            "to be a better dev, use vim motion" was something that was mentioned alot.
            and so I remember losing 3 days of sleep just to configure and understand what i am doing,
            it has been now about 1 year and i love neovim.
            <br/> <br/>
            One of the amazing things about neovim is it really makes you understand your tools alot more,
            and think differently in how you ultize a tool all together really. As you could be a great coder 
            but not a slow developer if you don't know your tools. Its nothing different from another editor once
            you set it up but it certainly makes you think differently after using this editor.
          </p>
        <div>
          <a href="https://izzyswe.github.io/Rayban-Project/">Go to Live Site</a>
          <a className="back" href="#" onClick={(event) => event.preventDefault()}>
            <span onClick={() => setGoBack("Home")}>Go Back</span>
          </a>
        </div>
      </div>
  </div>
  )
}
