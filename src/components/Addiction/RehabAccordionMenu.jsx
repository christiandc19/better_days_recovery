import React, { useState, useRef } from 'react';
import './RehabAccordionMenu.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RehabAccordionMenu = () => {
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
    <div className="rehab-accordion-menu">
      <button className="accordion-menu-button" onClick={toggleAccordion}>
        Our Rehab Programs
        <span className="rehab-accordion-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div
        className={`rehab-accordion-menu-content ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0' }}
      >
        <ul>
          <li><Link to="/drug-addiction-treatment" onClick={handleLinkClick}>Drug Addiction Rehab</Link></li>
          <li><Link to="/heroin-program" onClick={handleLinkClick}>Heroin</Link></li>
          <li><Link to="/xanax-rehab" onClick={handleLinkClick}>Xanax Addiction</Link></li>
          <li><Link to="/ativan-rehab" onClick={handleLinkClick}>Ativan</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default RehabAccordionMenu;
