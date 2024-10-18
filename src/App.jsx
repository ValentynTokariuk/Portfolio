import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
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

const AppContent = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Define swipe handlers for left and right swipes
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (location.pathname === '/') {
        navigate('/about');
      } else if (location.pathname === '/about') {
        navigate('/projects');
      } else if (location.pathname === '/projects') {
        navigate('/contact');
      }
    },
    onSwipedRight: () => {
      if (location.pathname === '/contact') {
        navigate('/projects');
      } else if (location.pathname === '/projects') {
        navigate('/about');
      } else if (location.pathname === '/about') {
        navigate('/');
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div className="portfolio" {...handlers}>
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
            <a href="https://github.com/ValentynTokariuk" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/valentyntokariuk/" target="_blank" rel="noopener noreferrer">
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
  );
};

const App = () => {
  return (
    <Router>
      {/* Scroll to top when the route changes */}
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
