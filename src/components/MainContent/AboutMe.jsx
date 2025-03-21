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

export default function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="aboutMe">
        <h2> Who Am I?</h2>
        <img className="aboutMePhoto" src= {profilePic}/>
        <p>
          I am a software developer with a passion for creating and building
          things. I have experience with Vanilla JavaScript, React.js, Spring Boot, and
          Java. I am always looking to learn new things and expand my
          knowledge. I am a quick learner and a team player. I am always
          looking to improve and grow as a developer. I am looking for a
          position where I can grow and learn new things. I am excited to see
          what the future holds for me as a developer.
          </p>
        <div>
          <img src={CsharpLogo} alt="CSharp Logo" />
          <img src={JavaLogo} alt="Java Logo" />
          <img src={VanillaLogo} alt="Vanilla Logo" />
          <img src={LuaLogo} alt="Lua Logo" />
          <img src={PythonLogo} alt="Python Logo" />
          <img src={ReactLogo} alt="React Logo" />
        </div>
      </div>
    </section>
  )
}
