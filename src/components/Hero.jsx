import "../App.css"

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="hero-title">Hello, World!</h1>
        <ul className="hero-socials">
          <li>
            <a href="https://github.com/izzyswe"><i className="fab fa-github icon"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/9-isaac-kim/"><i className="fab fa-linkedin icon"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/izzyswe/"><i className="fab fa-instagram icon"></i></a>
          </li>
        </ul>
        {/*<p className="hero-subtitle">
           Welcome to my portfolio. I'm a software engineer who loves to code.
        </p>*/}
      </div>
    </section>
  )
}
