import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [hovered, setHovered] = useState(false);

  return (
    < nav className="navbar navbar-expand-lg navbar-light fixed-top"
    style={{
      backgroundColor: hovered ? '#4682b4' : '#6495ed',
      transition: 'background-color 0.3s ease',
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <div className="container">
       
      <a className="navbar-brand" href="#" onClick={scrollToTop}>
          <span style={{ color: '#fff', fontFamily: 'Your-Preferred-Font', fontSize: '1.5rem' }}>DiabEaseDetect</span>
        </a>

        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Navbar Links with Animations */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="welcome"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                    color: '#fff',
                    transition: 'color 0.3s ease',
                  }}
              >
                Welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="diagnose"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: '#fff', transition: 'color 0.3s ease' }}
              >
                Diagnose
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="understanding"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: '#fff', transition: 'color 0.3s ease' }}
              >
                Understanding
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="causes"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                    color: '#fff',
                    transition: 'color 0.3s ease',
                  }}
              >
                Causes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="symptoms"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                    color: '#fff',
                    transition: 'color 0.3s ease',
                  }}
              >
                Symptoms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="treatment"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                    color: '#fff',
                    transition: 'color 0.3s ease',
                  }}
              >
                Treatment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                    color: '#fff',
                    transition: 'color 0.3s ease',
                  }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
