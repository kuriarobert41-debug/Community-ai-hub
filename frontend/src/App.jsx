import './App.css'

function App() {
return (
<div className="app">
<nav className="navbar">
<h2>Community AI Hub</h2>

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#tools">AI Tools</a>
      <a href="#resources">Resources</a>
      <a href="#community">Community</a>
      <a href="#about">About</a>
    </div>

    <button className="login-btn">Login</button>
  </nav>

  <main>
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="welcome">WELCOME TO COMMUNITY AI HUB</p>

        <h1>
          Learn, Create and
          <span> Grow with AI</span>
        </h1>

        <p className="hero-text">
          A community platform where people can discover AI tools,
          learn new skills, share knowledge and build amazing projects.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore AI Tools</button>
          <button className="secondary-btn">Join Community</button>
        </div>
      </div>
    </section>

    <section id="tools" className="section">
      <h2>AI Tools</h2>
      <p>Discover useful AI tools for learning, creativity and productivity.</p>

      <div className="cards">
        <div className="card">
          <h3>AI Learning</h3>
          <p>Find tools that help you learn faster and understand new topics.</p>
        </div>

        <div className="card">
          <h3>AI Creativity</h3>
          <p>Create images, content and ideas using modern AI tools.</p>
        </div>

        <div className="card">
          <h3>AI Productivity</h3>
          <p>Use AI to organize your work and accomplish tasks efficiently.</p>
        </div>
      </div>
    </section>

    <section id="resources" className="section">
      <h2>Learning Resources</h2>
      <p>
        Access tutorials, guides and resources to improve your AI skills.
      </p>
    </section>

    <section id="community" className="section">
      <h2>Community</h2>
      <p>
        Connect with other learners, developers and AI enthusiasts.
      </p>
    </section>

    <section id="about" className="section">
      <h2>About Community AI Hub</h2>
      <p>
        Community AI Hub brings people together to learn about AI,
        discover useful tools and collaborate on projects.
      </p>
    </section>
  </main>

  <footer>
    <p>© 2026 Community AI Hub. All rights reserved.</p>
  </footer>
</div>

)
}

export default App

