import "../../App.css"
import RaybanSS from "../../assets/projects/Drawing.png"
import Projects from "../MainContent/Projects.jsx"
import { useState } from "react"

export default function PyleOrganizer(){

  const [goBack, setGoBack] = useState(null)
  if(goBack == "Home"){
    return <Projects />
  }

  return(
  <div className="ProjectDescription">
        <img src={RaybanSS} alt="PyleOrganizer Project Screenshot" />
        <div>
          <h2>PyleOrganizer Project</h2>
          <p>
            This was the final Project Learning CSS designs in Georgian College Barrie ON,
            The objective of the last project was to create a modern website of a brand, could be an idea 
            for your pseudo business, future potential business, an existing business...etc, 
            either or you needed to create a modernized version of it. For Context, If you had this professor in last semester
            you were to create an e-commerce in the 1980s, in this box there is a link to provide the project page

            For me, I decided to go with Microsoft, because convienently, these was sort of the era of the birth of many microsoft's products
            But i am getting a ahead of myself
          </p>
        <div>
          <a href="https://github.com/izzyswe/PyleOrganizer">Go to Github</a>
          <a className="back" href="#" onClick={(event) => event.preventDefault()}>
            <span onClick={() => setGoBack("Home")}>Go Back</span>
          </a>
        </div>
      </div>
  </div>
  )
}
