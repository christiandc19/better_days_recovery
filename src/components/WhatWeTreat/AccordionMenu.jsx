import React, { useState, useRef } from 'react';
import './AccordionMenu.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AccordionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    const content = contentRef.current;
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px'; // Open the accordion
    } else {
      content.style.maxHeight = 0; // Close the accordion
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="accordion-menu">
      <button className="accordion-menu-button" onClick={toggleAccordion}>
        What We Treat
        <span className="accordion-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div
        className={`accordion-menu-content ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0' }}
      >
        <ul>
          <li><Link to="/alcoholism" onClick={handleLinkClick}>Alcoholism</Link></li>
          <li><Link to="/cocaine-addiction-treatment" onClick={handleLinkClick}>Cocaine Addiction</Link></li>
          <li><Link to="/fentanyl-addiction-treatment" onClick={handleLinkClick}>Fentanyl Addiction</Link></li>
          <li><Link to="/meth-addiction-treatment" onClick={handleLinkClick}>Meth Addiction</Link></li>
          <li><Link to="/prescription-addiction-treatment" onClick={handleLinkClick}>Prescription Drug Addiction</Link></li>
          <li><Link to="/kratom-addiction-treatment" onClick={handleLinkClick}>Kratom</Link></li>
          <li><Link to="/cannabis-addiction-treatment" onClick={handleLinkClick}>Cannabis Addiction</Link></li>
          <li><Link to="/benzo-addiction-treatment" onClick={handleLinkClick}>Benzo Addiction</Link></li>
          <li><Link to="/painkiller-addiction-treatment" onClick={handleLinkClick}>Painkiller Addiction</Link></li>
          <li><Link to="/inhalant-addiction-treatment" onClick={handleLinkClick}>Inhalant Addiction</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionMenu;
