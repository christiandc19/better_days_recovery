import React from 'react';
import './AddictionRehabSection.css';
import AlcoholAddicition from '../../../assets/alcoholic_man.webp';  // Add relevant images
import heroinImage from '../../../assets/heroin_addiction.webp';
import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';

const AlcoholHeroinRehab = () => {
  return (

    <>
      <div className='addiction-section container'>
        <div className='addiction-section-content'>
          <div className='addiction-section-sidebar'>
            <ProgramOptionsMenu />
            <SidebarInsurance />
          </div>

          <div className='addiction-section-caption'>

            <div className='addiction-section-header'>
              <h1>Alcohol and Heroin Addiction Rehab</h1>
              <p>        
                At Tree Of Live Rehab Center, we specialize in comprehensive treatment programs for <strong>Alcohol Addiction</strong> and <strong>Heroin Addiction</strong>. Our goal is to provide effective recovery paths tailored to meet individual needs, helping you overcome addiction and regain control of your life.
              </p>
            </div>

            <div className='addiction-section-body'>

              <div className='addiction-section-flex'>
                <div className='addiction-section-flex-caption'>
                  <h1>Alcohol Addiction Rehab Program</h1>
                  <p>Struggling with alcohol addiction can be overwhelming, but recovery is possible. Our alcohol rehab program at Tree Of Live Rehab Center provides a holistic approach, including medical detox, counseling, and ongoing support. We offer evidence-based therapies such as Cognitive Behavioral Therapy (CBT) and group counseling to address the root causes of addiction and promote long-term recovery. <br /> Whether you're dealing with long-term alcohol dependence or have recently experienced difficulties with alcohol abuse, our program is designed to help you break the cycle and rebuild your health and life. We use proven methods to manage withdrawal symptoms and minimize the risk of relapse.</p>
                </div>
                <div className='addiction-section-flex-image'>
                  <img src={AlcoholAddicition} alt='Alcoholic Man' loading='lazy'/>
                </div>
              </div>

              <div className='addiction-section-flex flex-reverse'>
                <div className='addiction-section-flex-image'>
                  <img src={heroinImage} alt='Alcoholic Man' loading='lazy'/>
                </div>
                <div className='addiction-section-flex-caption'>
                  <p>Heroin addiction is a serious, life-threatening condition, but our specialized rehab program can help. At Tree Of Live Rehab Center, we offer a structured treatment plan that includes medical detoxification, intensive therapy, and support systems to ensure a full recovery.</p><br />
                  <p>Our heroin addiction rehab program focuses on addressing both the physical and psychological aspects of addiction. With individualized care, patients receive treatment that helps reduce cravings, manage withdrawal, and rebuild emotional well-being.</p> <br />
                  <p>We utilize a range of therapies, including Medication-Assisted Treatment (MAT), which can ease withdrawal symptoms and reduce the risk of relapse. Our compassionate team is committed to supporting patients every step of the way on their journey to recovery.</p>
                </div>

              </div>



            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AlcoholHeroinRehab;
