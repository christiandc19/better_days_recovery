import React from 'react';
import './MATProgram.css'; // Assuming you have a CSS file for styling

import OutpatientOne from '../../../assets/MAT_hero.webp';  // Add relevant images
import OutpatientTwo from '../../../assets/tab-MAT.webp';

import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';



const MATProgram = () => {
  return (
  
    <>
  <div className='mat-section container'>
    <div className='mat-section-content'>
      <div className='mat-section-sidebar'>
        <ProgramOptionsMenu />
        <SidebarInsurance />
      </div>

      <div className='mat-section-caption'>

        <div className='mat-section-header'>
          <h1>Medication-Assisted Treatment Program</h1>
          <p>
            At Tree of Life Rehab Center, our <strong>Medication-Assisted Treatment (MAT) Program</strong> is designed to provide comprehensive support for individuals overcoming addiction. Combining FDA-approved medications with behavioral therapy, MAT helps to manage withdrawal symptoms, reduce cravings, and promote sustained recovery.
          </p>
        </div>

        <div className='mat-section-body'>

          <div className='mat-section-flex'>
            <div className='mat-section-flex-caption'>
              <h1>What is Medication-Assisted Treatment?</h1>
              <p>
                Medication-Assisted Treatment (MAT) is an evidence-based approach to treating substance use disorders. It involves the use of medications such as buprenorphine, methadone, and naltrexone, which are specifically designed to help individuals manage withdrawal symptoms and reduce cravings. At Tree of Life, our MAT program combines these medications with counseling and behavioral therapies to address both the physical and psychological aspects of addiction.
              </p>
              <p>
                Our team works closely with each patient to create a personalized treatment plan that suits their unique needs, helping them to transition safely through the detox process and build the foundation for a healthy, addiction-free life.
              </p>
            </div>
            <div className='mat-section-flex-image'>
              <img src={OutpatientOne} alt='Person receiving Medication-Assisted Treatment' loading='lazy'/>
            </div>
          </div>

          <div className='mat-section-flex flex-reverse'>
            <div className='mat-section-flex-image'>
              <img src={OutpatientTwo} alt='Counseling session as part of MAT program' loading='lazy'/>
            </div>
            <div className='mat-section-flex-caption'>
              <p>
                Our MAT program is supported by a compassionate team of medical professionals who provide consistent monitoring and guidance throughout the recovery journey. In addition to medication, our patients participate in one-on-one and group counseling sessions that focus on developing healthy coping strategies, rebuilding relationships, and creating a life free from addiction.
              </p>
              <p>
                With a holistic approach, Tree of Life Rehab Center aims to empower individuals to achieve long-term recovery and regain control of their lives. Our goal is not just to treat the symptoms of addiction but to help our patients build a sustainable path to wellness.
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

export default MATProgram;
