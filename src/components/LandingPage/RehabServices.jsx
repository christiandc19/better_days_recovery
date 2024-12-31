import React, { useState } from 'react';
import './RehabServices.css';
import InpatientImage from '../../assets/inpatient-hero.webp'
import DualDiagnosis from '../../assets/dual_diagnosis.webp'
import Addiction from '../../assets/depressed_man3.webp'
import Mat from '../../assets/our_therapies_inpatient.webp'

import { Link } from 'react-router-dom'; // For routing between pages
import { FaLongArrowAltRight } from "react-icons/fa"; // Import the arrow icon

const RehabServices = () => {
  const [activeTab, setActiveTab] = useState('inpatient');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
  };

  return (
    <>

    <div className="rehab-services">

    <div className='rehab-services-header'>
        <h1>Our Program Options</h1>
    </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'inpatient' ? 'active' : ''}`} 
          onClick={() => handleTabClick('inpatient')}>
          Inpatient
        </button>
        <button 
          className={`tab ${activeTab === 'outpatient' ? 'active' : ''}`} 
          onClick={() => handleTabClick('outpatient')}>
          Outpatient
        </button>
        <button 
          className={`tab ${activeTab === 'dual-diagnosis' ? 'active' : ''}`} 
          onClick={() => handleTabClick('dual-diagnosis')}>
          Dual Diagnosis
        </button>
        <button 
          className={`tab ${activeTab === 'addiction' ? 'active' : ''}`} 
          onClick={() => handleTabClick('addiction')}>
          Addiction
        </button>
        <button 
          className={`tab ${activeTab === 'mat' ? 'active' : ''}`} 
          onClick={() => handleTabClick('mat')}>
          Medication Assisted Therapy
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'inpatient' && (
          <div className="content inpatient fade-in">
            <div className='tab-content-flex'>
              <div className='tab-content-caption'>
                <h1>Inpatient Rehab Program at Tree of Life</h1>
                  <p>
                  At Better Days Recovery, our Inpatient Rehab Program offers a safe and structured environment for individuals seeking comprehensive treatment for substance abuse and co-occurring disorders. With 24/7 medical and emotional support, clients receive individualized care tailored to their specific recovery needs. Our program is designed to foster healing and personal growth through a combination of therapy, medical supervision, and holistic activities.
                  </p>
                  <h1>Why Choose Inpatient Rehab?</h1>
                  <p>Our Inpatient Program allows clients to focus entirely on recovery, free from external distractions and triggers. By staying on-site, individuals benefit from round-the-clock care in a nurturing setting. This immersive approach ensures consistent progress, providing a foundation for long-term sobriety.</p>

                  <div className='tab-caption-btn'>
                            <Link to="/inpatient-rehab" onClick={scrollToTop}>
                                <button className='tab-btn1'>
                                    Learn More <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                        </div>


              </div>
              <div className='tab-content-image'>
                <img src={InpatientImage} alt='Inpatient' loading='lazy'/>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'outpatient' && (
          <div className="content outpatient fade-in">

            <div className='tab-content-flex'>
              <div className='tab-content-caption'>
                <h1>Oupatient Rehab Program</h1>
                  <p>
                  Better Days Recovery’s Outpatient Rehab Program offers a flexible yet effective treatment option for individuals seeking support while maintaining their daily responsibilities. Our outpatient services are designed for those who do not require 24/7 supervision but still need professional guidance in overcoming addiction. Through personalized treatment plans, clients participate in scheduled therapy sessions, group support, and wellness activities that fit into their everyday lives.
                  </p>
                  <h1>Why Choose Outpatient Rehab?</h1>
                  <p>The Outpatient Program at Better Days Recovery provides clients with the freedom to continue their work, school, or family commitments while receiving the care they need. This program is ideal for those who have a stable living environment and support system at home. Our approach promotes long-term recovery, empowering individuals to apply new coping strategies in real-world situations.</p>

                  <div className='tab-caption-btn'>
                            <Link to="/outpatient-rehab" onClick={scrollToTop}>
                                <button className='tab-btn1'>
                                    Learn More <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                        </div>
              </div>

            </div>

          </div>
        )}
        {activeTab === 'dual-diagnosis' && (
          <div className="content dual-diagnosis fade-in">

<div className='tab-content-flex'>
              <div className='tab-content-caption'>
                <h1>Dual Diagnosis</h1>
                  <p>
                  Better Days Recovery specializes in Dual Diagnosis treatment, offering comprehensive care for individuals struggling with both substance abuse and co-occurring mental health disorders. Our integrated approach addresses addiction and underlying mental health conditions such as anxiety, depression, PTSD, or bipolar disorder. By treating both issues simultaneously, we ensure clients receive holistic care that promotes lasting recovery.
                  </p>
                  <h1>Our Dual Diagnosis Treatment</h1>
                  <p>Our Dual Diagnosis Program provides a personalized treatment plan tailored to each client’s unique needs. Combining evidence-based therapies, medication management, and holistic practices, we focus on healing the mind, body, and spirit. This approach helps clients build a strong foundation for recovery, addressing the root causes of addiction while promoting mental well-being.</p>

                  <div className='tab-caption-btn'>
                            <Link to="/dual-diagnosis-program" onClick={scrollToTop}>
                                <button className='tab-btn1'>
                                    Learn More <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                        </div>
              </div>
              <div className='tab-content-image'>
                <img src={DualDiagnosis} alt='dual-diagnosis' loading='lazy'/>
              </div>
            </div>


          </div>
        )}
                {activeTab === 'addiction' && (
          <div className="content addiction fade-in">

<div className='tab-content-flex'>
              <div className='tab-content-caption'>
                <h1>Addiction</h1>
                  <p>
                  At Better Days Recovery, our Inpatient Rehab Program offers a safe and structured environment for individuals seeking comprehensive treatment for substance abuse and co-occurring disorders. With 24/7 medical and emotional support, clients receive individualized care tailored to their specific recovery needs. Our program is designed to foster healing and personal growth through a combination of therapy, medical supervision, and holistic activities.
                  </p>
                  <h1>Why Choose Inpatient Rehab?</h1>
                  <p>Our Inpatient Program allows clients to focus entirely on recovery, free from external distractions and triggers. By staying on-site, individuals benefit from round-the-clock care in a nurturing setting. This immersive approach ensures consistent progress, providing a foundation for long-term sobriety.</p>

                  <div className='tab-caption-btn'>
                            <Link to="/inpatient-rehab" onClick={scrollToTop}>
                                <button className='tab-btn1'>
                                    Learn More <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                        </div>
              </div>
              <div className='tab-content-image'>
                <img src={Addiction} alt='Inpatient' loading='lazy'/>
              </div>
            </div>


          </div>
        )}
        {activeTab === 'mat' && (
          <div className="content mat fade-in">

<div className='tab-content-flex'>
              <div className='tab-content-caption'>
                <h1>Medication Assisted Therapy</h1>
                  <p>
                  At Better Days Recovery, our Inpatient Rehab Program offers a safe and structured environment for individuals seeking comprehensive treatment for substance abuse and co-occurring disorders. With 24/7 medical and emotional support, clients receive individualized care tailored to their specific recovery needs. Our program is designed to foster healing and personal growth through a combination of therapy, medical supervision, and holistic activities.
                  </p>
                  <h1>Why Choose Inpatient Rehab?</h1>
                  <p>Our Inpatient Program allows clients to focus entirely on recovery, free from external distractions and triggers. By staying on-site, individuals benefit from round-the-clock care in a nurturing setting. This immersive approach ensures consistent progress, providing a foundation for long-term sobriety.</p>

                  <div className='tab-caption-btn'>
                            <Link to="/inpatient-rehab" onClick={scrollToTop}>
                                <button className='tab-btn1'>
                                    Learn More <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                            </Link>
                        </div>
              </div>
              <div className='tab-content-image'>
                <img src={Mat} alt='Inpatient' loading='lazy'/>
              </div>
            </div>


          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default RehabServices;
