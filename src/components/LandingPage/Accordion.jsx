import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div
            className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
            style={{ maxHeight: activeIndex === index ? '1000px' : '0' }}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Accordion;
