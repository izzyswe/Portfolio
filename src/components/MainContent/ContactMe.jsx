import "../../App.css"
import { useState } from "react"

export default function ContactMe(){
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42479ca8-9d3c-447a-83af-01ac67c10d89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      return(
        <div className="formSuccess">
          <h2>Form Submitted Successfully</h2>
          <p>Thank you for your message!</p>
        </div>
      );
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return(
    <section id="contactMe">
      <div className="contactMe">
        <h2> Contact Me</h2>

        <div>
          <p>
            The following is the most up to date Resume, 
            any and all inquires must be done via Email
          </p>
          <a href="../../assets/Isaac_Kim_-_Software_Developer_Intern.pdf" download>Resume Download</a>
        </div>
         
        <div>
          <h4> Reach Out To Me!</h4>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required/>
            <label htmlFor="subject">Subject</label>
            <textarea name="message" required></textarea>

            <button type="submit">Submit Form</button>
          </form>
        <span>{result}</span>
      </div>
      </div>
    </section>
  )
}
