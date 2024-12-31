import React from 'react';
import './DetoxProgramSection.css';
import DetoxImage1 from '../../../assets/psychologist-talking-with-patient-on-therapy-session.webp';
import DetoxImage2 from '../../../assets/detox_hero.webp';

import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';


const DetoxProgramSection = () => {
  return (

    <>
    <div className='detox-section container'>
      <div className='detox-section-content'>
        <div className='detox-section-sidebar'>
          <ProgramOptionsMenu />
          <SidebarInsurance />
        </div>
  
        <div className='detox-section-caption'>
  
          <div className='detox-section-header'>
            <h1>Detox Program</h1>
            <p>
              At Better Days Recovery Center, our Detox Program is designed to help individuals safely and effectively manage the withdrawal process. With a compassionate and medically supervised environment, we focus on easing withdrawal symptoms and preparing patients for the next steps in recovery.
            </p>
          </div>
  
          <div className='detox-section-body'>
  
            <div className='detox-section-flex'>
              <div className='detox-section-flex-caption'>
                <h1>Comprehensive Detox Services</h1>
                <p>
                  Detoxification is the first critical step in overcoming substance dependence. Our program provides a holistic approach that includes medical support, monitoring, and counseling. By creating a structured detox environment, we help manage both the physical and emotional challenges of withdrawal, setting a strong foundation for long-term recovery.
                  <br />
                  Our team utilizes evidence-based practices to minimize discomfort, reduce cravings, and prevent complications. Whether detoxing from alcohol, opioids, or other substances, our approach ensures each patient receives personalized, effective care.
                </p>
              </div>
              <div className='detox-section-flex-image'>
                <img src={DetoxImage1} alt='Patient in Detox Program' loading='lazy'/>
              </div>
            </div>
  
            <div className='detox-section-flex flex-reverse'>
              <div className='detox-section-flex-image'>
                <img src={DetoxImage2} alt='Medical team providing detox care' loading='lazy'/>
              </div>
              <div className='detox-section-flex-caption'>
                <p>
                  Our detox program addresses both the physical and psychological challenges of withdrawal. By providing a blend of medical care, emotional support, and therapy, we prepare patients for the journey ahead.
                </p><br />
                <p>
                  Patients have access to Medication-Assisted Treatment (MAT) when necessary to ease symptoms and reduce relapse risks. Our dedicated team guides patients through every step, ensuring a safe and successful detox process.
                </p>
              </div>
            </div>
  
          </div>
  
        </div>
      </div>
    </div>
  </>
  


  );
};

export default DetoxProgramSection;
