import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Tools from './pages/Tools'
import Resources from './pages/Resources'
import Community from './pages/Community'
import About from './pages/About'

function Home() {
  return (
    <section className="hero-section">
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
          <Link to="/tools" className="primary-btn">
            Explore AI Tools
          </Link>

          <button className="secondary-btn">
            Join Community
          </button>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <Link to="/" className="logo">
            <h2>Community AI Hub</h2>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/tools">AI Tools</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/community">Community</Link>
            <Link to="/about">About</Link>
          </div>

          <button className="login-btn">Login</button>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/tools" element={<Tools />} />

            <Route path="/resources" element={<Resources />} />

            <Route path="/community" element={<Community />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer>
          <p>© 2026 Community AI Hub. All rights reserved.</p>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App
