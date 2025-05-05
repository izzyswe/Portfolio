//styling
import "../../App.css";
//logo
import profilePic from "../../assets/profile.jpeg"

//programming languages images
import CsharpLogo from "../../assets/plang/csharp.svg"
import JavaLogo from "../../assets/plang/java.svg"
import VanillaLogo from "../../assets/plang/js.svg"
import LuaLogo from "../../assets/plang/lua.svg"
import PythonLogo from "../../assets/plang/python.svg"
import ReactLogo from "../../assets/plang/react.svg"
import SpringBoot from "../../assets/plang/springboot.svg"
import MySQL from "../../assets/plang/mySQL.webp"

export default function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="aboutMe">
        <h2> Who Am I?</h2>
        <img className="aboutMePhoto" src= {profilePic}/>
        <p>
          Hi, I'm Isaac, I am a software developer with a passion for creating and building
          things. I have 5+ experience with building and optimizing Desktop and Mobile application. 
          I am always looking to learn new things and expand my
          knowledge. An extremely fast adapter and learner to new technologies, 
          being that some of these languages below are languages self-taught within 2 weeks (or this website built on Reactjs with only 20 hours of learning).
          I excel at debugging, troubleshooting and general problem solving. 
          Mentored many students and collaborate with other open source developers.
          I'm always committed to ensuring the highest quality in my work and effort with the most efficiency.
          </p>
        <div>
          <img src={CsharpLogo} alt="CSharp Logo" />
          <img src={JavaLogo} alt="Java Logo" />
          <img src={VanillaLogo} alt="Vanilla Logo" />
          <img src={LuaLogo} alt="Lua Logo" />
          <img src={PythonLogo} alt="Python Logo" />
          <img src={ReactLogo} alt="React Logo" />
          <img src={SpringBoot} alt="Spring Boot"/>
          <img src={MySQL} alt="mySQL" />
        </div>
      </div>
    </section>
  )
}
