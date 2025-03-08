import "../App.css";

export default function Hero() {
  const background = document.querySelector('.hero')

  document.addEventListener('scroll', (e) => {
    const scroll = window.scrollY
    background.style.backgroundPosition = `0px ${scroll/2}px`;
  })
  return (
    <section className="hero">
      <div>
        <h1 className="hero-title">Hello, World!</h1>
        <p className="hero-subtitle">
            Welcome to my portfolio. I'm a software engineer who loves to code.
        </p>
        <ul className="hero-socials">
          <li>
            <a href=""><i className="fab fa-github">gt</i></a>
          </li>
          <li>
            <a href=""><i className="fab fa-linkedin">LIN</i></a>
          </li>
          <li>
            <a href=""><i className="fab fa-instagram">IN</i></a>
          </li>

        </ul>
      </div>
    </section>
  )
}
