import "../../App.css"
// bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
//project FilePath
import LotteProject from "../Projects/Lotte.jsx"
import RaybanProject from "../Projects/Rayban.jsx"
import PyleOrganizerProject from "../Projects/PyleOrganizer.jsx"
import TodoProject from "../Projects/Todo.jsx"
import WhysAppProject from "../Projects/WhysApp.jsx"
import NeovimProject from "../Projects/Neovim.jsx"
//preview project photos
import TodoList from "../../assets/projects/logos/TodoList-.png"
import Neovim from "../../assets/projects/logos/neovim.jpg"
import LottePhoto from "../../assets/projects/logos/lotte.png"
import WhysApp from "../../assets/projects/logos/WhysApp.jpg"
import PyleOrganizer from "../../assets/projects/logos/PyleOrganizer.png"
import Rayban from "../../assets/projects/logos/RayBan.jpg"
// project photo screenshot
//import photo from "../../assets/projects/LotteSS.png"

//Use State
import { useState } from "react";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  // If a project is selected, render that component
  if (selectedProject === "LotteProject") {
    return <LotteProject />;
  }
  if (selectedProject === "RaybanProject"){
    return <RaybanProject />;
  }
  if (selectedProject === "NeovimProject"){
    return <NeovimProject />
  }
  if (selectedProject === "WhysAppProject"){
    return <WhysAppProject />
  }
  if(selectedProject === "PyleOrganizerProject"){
    return <PyleOrganizerProject />
  }
  if(selectedProject === "TodoProject"){
    return <TodoProject />
  }

  return (
    <section id="projects">
      <div className="projects">
        <h2> Projects</h2>
        <p>
          Here are some of the recent Projects that I have finished
        </p>
        <div>
          <CardGroup className="gap-3 mb-3" style={{height: "22rem"}}>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={TodoList} style={{width: "382.5px"}} />
            <Card.Body>
              <Card.Title style={{ color: "white"}}>Todo List </Card.Title>
              <Button variant="primary" onClick={() => setSelectedProject("TodoProject")}>Go To Project</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={Neovim} style={{width: "382.5px"}} />
            <Card.Body>
              <Card.Title style={{ color: "white"}}>NeoVim Configuration</Card.Title>
              <Button variant="primary" onClick={() => setSelectedProject("NeovimProject")}>Go To Project</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={LottePhoto} style={{width: "382.5px"}} />
            <Card.Body>
              <Card.Title style={{color:"white"}}>Lotte Replica</Card.Title>
              <Button variant="primary" onClick={() => setSelectedProject("LotteProject")}>Go To Project</Button>
            </Card.Body>
          </Card>
          </CardGroup>
          <CardGroup className="gap-3 mb-3">
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={WhysApp} style={{width: "382.5px"}} />
            <Card.Body>
              <Card.Title style={{color:"white"}}>WhysApp</Card.Title>
              <Button variant="primary" onClick={() => setSelectedProject("WhysAppProject")}>Go To Project</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={PyleOrganizer} style={{width: "382.5px"}} />
            <Card.Body>
              <Card.Title style={{color:"white"}}>Pyle Organizer</Card.Title>
              <Button variant="primary" onClick={() => setSelectedProject("PyleOrganizerProject")}>Go To Project</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={Rayban} style={{width: "382.5px"}} />
            <Card.Body>
              <Card.Title style={{color:"white"}}>Rayban Replica</Card.Title>
                {/*<Card.Text style={{ color: "white"}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>*/}
              <Button variant="primary" onClick={() => setSelectedProject("RaybanProject")}>Go To Project</Button>
            </Card.Body>
          </Card>
          </CardGroup>
        </div>
      </div>
    </section>
  )
}
