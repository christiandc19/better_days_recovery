import React from 'react';
import './OurValues.css'; // Import a CSS file for styling if needed

import OurValuesImage from '../../assets/about_us_section.webp'

const OurValues = () => {
  return (
    <div className="our-values">
      <div className='ourValuesContent container'>
        <div className='ourValuesFlexCaption'>

          <h1>About Us</h1>
          <p>At Better Days Recovery, we are dedicated to providing compassionate and comprehensive care for individuals struggling with addiction and mental health challenges. Our mission is to empower every client with the tools and support necessary to reclaim their lives and achieve lasting recovery. We believe in a holistic approach, blending evidence-based therapies, personalized treatment plans, and a nurturing environment to address the physical, emotional, and psychological aspects of recovery.</p>
          <br/>
          <h1>Our Values</h1>
            <p><b>Integrity:</b> We uphold the highest standards of honesty and ethical behavior.</p>
            <p><b>Innovation:</b> We embrace creativity and strive for continuous improvement.</p>
            <p><b>Customer Focus:</b> We are dedicated to meeting the needs of our customers.</p>
            <p><b>Teamwork:</b> We collaborate and support each other to achieve common goals.</p>
        </div>
        <div className='ourValuesFlexImage'>
          <img src={OurValuesImage} alt='Therapist' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
