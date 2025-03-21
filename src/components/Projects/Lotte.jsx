import "../../App.css"
import LotteSS from "../../assets/projects/LotteSS.png"
import Projects from "../MainContent/Projects.jsx"
import { useState } from "react"


export default function Lotte(){

  const [goBack, setGoBack] = useState(null)
  if(goBack == "Home"){
    return <Projects />
  }

  return(
  <div className="ProjectDescription">
      <img src={LotteSS} alt="Lotte Project Screenshot" />
      <div>
        <h2>Lotte Replica Project</h2>
        <p>
          This was part of a Lab at Georgian College Barrie ON, as part of the assignment, 
          we were to design a website for our favourite chocolate brand or Sweets company
          and make it very legitimate looking, While this was not inherently what i visioned,
          it was still more or less the direction i was continue the commit. 

          The most frustrating part about this assignment were 2 things.
            - First annoyance was the design, as happy as i am in how it turned out, 
              by the end of the work, it felt like i was creating a Tim Horton's spin off due the colouring i decided to use.
            - Second annoyance was during this time, this was the introduction to responsive screen design so ensuring the
              code was optimized enough to handle much screen wasn't all too terrible, however the menu was confusing me for
              a long while and that's why if you open this in a mobile view, it looks like an afterthought
        </p>
        <div>
          <a href="https://izzyswe.github.io/SweetsWebsite/assignment2/index.html">Go to Live Site</a>
          <a className="back" href="#" onClick={(event) => event.preventDefault()}>
            <span onClick={() => setGoBack("Home")}>Go Back</span>
          </a>
        </div>
      </div>
  </div>
  )
}
