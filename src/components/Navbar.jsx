import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png'; // Import the dark logo
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll event to handle background color and logo change
  


  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Determine if we are on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isScrolled || !isHomePage ? 'scrolled' : ''}`} name="top">
      <div className="nav-box container">
        <div className="navbar-logo">
          <img src={Logo} alt='logo' loading='lazy'/>
          {/* Dynamically switch logo based on scroll state or homepage */}
          {/* <img src={isScrolled || !isHomePage ? logoDark : logo} alt="logo" loading="lazy" /> */}
        </div>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Home</Link></li>

          {/* Dropdown for Program Options */}
          <li className="dropdown">
            <Link to="#" role="button" aria-haspopup="true" aria-expanded={isMenuOpen ? 'true' : 'false'}>
              Program Options
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/addiction-program" onClick={() => { closeMenu(); scrollToTop(); }}>Addiction Treatment Program</Link></li>
              <li><Link to="/detox-program" onClick={() => { closeMenu(); scrollToTop(); }}>Detox Program</Link></li>
              <li><Link to="/outpatient-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Outpatient</Link></li>
              <li><Link to="/inpatient-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Inpatient</Link></li>
              <li><Link to="/dual-diagnosis-program" onClick={() => { closeMenu(); scrollToTop(); }}>Dual Diagnosis</Link></li>
              <li><Link to="/medication-assisted-program" onClick={() => { closeMenu(); scrollToTop(); }}>Medication Assisted Treatment</Link></li>
              <li><Link to="/veterans-addiction-treatment-program" onClick={() => { closeMenu(); scrollToTop(); }}>Veterans' Addiction Treatment</Link></li>
            </ul>
          </li>

          {/* Dropdown for What We Treat */}
          <li className="dropdown">
            <Link to="#" role="button" aria-haspopup="true" aria-expanded={isMenuOpen ? 'true' : 'false'}>
              What We Treat
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/alcoholism" onClick={() => { closeMenu(); scrollToTop(); }}>Alcoholism</Link></li>
              <li><Link to="/cocaine-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Cocaine Addiction</Link></li>
              <li><Link to="/fentanyl-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Fentanyl Addiction</Link></li>
              <li><Link to="/meth-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Meth Addiction</Link></li>
              <li><Link to="/prescription-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Prescription Drug Addiction</Link></li>
              <li><Link to="/kratom-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Kratom</Link></li>
              <li><Link to="/cannabis-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Cannabis Addiction</Link></li>
              <li><Link to="/benzo-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Benzo Addiction</Link></li>
              <li><Link to="/painkiller-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Painkiller Addiction</Link></li>
              <li><Link to="/inhalant-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Inhalant Addiction</Link></li>
            </ul>
          </li>

          {/* Dropdown for Rehab */}
          <li className="dropdown">
            <Link to="#" role="button" aria-haspopup="true" aria-expanded={isMenuOpen ? 'true' : 'false'}>
              Rehab
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/drug-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Drug Rehab</Link></li>
              <li><Link to="/heroin-program" onClick={() => { closeMenu(); scrollToTop(); }}>Heroin Program</Link></li>
              <li><Link to="/xanax-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Xanax Rehab</Link></li>
              <li><Link to="/ativan-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Ativan Rehab</Link></li>
            </ul>
          </li>

          <li><Link to="/about" onClick={() => { closeMenu(); scrollToTop(); }}>About</Link></li>
          <li><Link to="/contact" onClick={() => { closeMenu(); scrollToTop(); }}><button>Contact Us</button></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
