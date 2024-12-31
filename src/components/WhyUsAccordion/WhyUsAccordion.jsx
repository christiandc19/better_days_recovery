// src/components/Accordion.js
import React, { useState } from 'react';
import './WhyUsAccordion.css'

const WhyUsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  const reasons = [
    {
      title: 'Personalized Care Plans',
      content: 'We provide tailored treatment plans to meet the unique needs of each individual.',
    },
    {
      title: 'Experienced Medical Team',
      content: 'Our medical staff has years of experience in providing top-notch rehab services.',
    },
    {
      title: 'Holistic Approach',
      content: 'We offer a blend of medical and holistic therapies to treat the mind, body, and soul.',
    },
    {
      title: 'Comfortable Environment',
      content: 'Our facility is designed to make our clients feel at home and comfortable throughout their recovery journey.',
    },
    {
      title: 'Proven Success Rates',
      content: 'Our rehabilitation programs have helped countless individuals regain control of their lives.',
    },
  ];

  return (
    <div className="why-us-accordion">
        <div className="why-us-accordion-title">
            <h2>Reasons to Choose Better Days Recovery</h2>
        </div>
      <div className="why-us-accordion-container">
        {reasons.map((item, index) => (
          <div key={index} className="why-us-accordion-item">
            <div className="why-us-accordion-header" onClick={() => handleToggle(index)}>
              <h3>{item.title}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="why-us-accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsAccordion;
