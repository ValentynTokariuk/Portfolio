import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return null;
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="portfolio">
        {/* Scroll to top when the route changes */}
        <ScrollToTop />

        <header>
          <h3>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Valentyn Tokariuk
            </Link>
          </h3>
          <nav className={scrolled ? "nav-button" : ""}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Catch-all route */}
        </Routes>

        <footer>
          <div className="footer-content">
            <h3><Link to="/contact">Get in Touch</Link></h3>
            <div className="social-links">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://wa.me/35679060965" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
            <p>© {new Date().getFullYear()} Valentyn Tokariuk. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
