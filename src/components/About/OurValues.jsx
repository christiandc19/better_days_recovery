import React from 'react';
import './OurValues.css'; // Import a CSS file for styling if needed

import OurValuesImage from '../../assets/about_us_section.webp'

const OurValues = () => {
  return (
    <div className="our-values">
      <div className='ourValuesContent container'>
        <div className='ourValuesFlexCaption'>

          <h1>About Us</h1>
          <p>At Tree Of Live Rehab, we are dedicated to providing compassionate and comprehensive care for individuals struggling with addiction and mental health challenges. Our mission is to empower every client with the tools and support necessary to reclaim their lives and achieve lasting recovery. We believe in a holistic approach, blending evidence-based therapies, personalized treatment plans, and a nurturing environment to address the physical, emotional, and psychological aspects of recovery.</p>

          <h1>Our Values</h1>
          <ul>
            <li><b>Integrity:</b> We uphold the highest standards of honesty and ethical behavior.</li>
            <li><span>Innovation:</span> We embrace creativity and strive for continuous improvement.</li>
            <li><span>Customer Focus:</span> We are dedicated to meeting the needs of our customers.</li>
            <li><span>Teamwork:</span> We collaborate and support each other to achieve common goals.</li>
          </ul>
        </div>
        <div className='ourValuesFlexImage'>
          <img src={OurValuesImage} alt='Therapist' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
