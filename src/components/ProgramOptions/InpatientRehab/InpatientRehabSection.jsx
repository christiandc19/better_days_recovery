import React from 'react';
import './InpatientRehabSection.css';
import InpatientOne from '../../../assets/therapy-session-young-man.webp';  // Add relevant images
import InpatientTwo from '../../../assets/woman-psychologist-in-glasses.webp';

import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';


const InpatientRehabSection = () => {
  return (
<>
  <div className='inpatient-section container'>
    <div className='inpatient-section-content'>
      <div className='inpatient-section-sidebar'>
        <ProgramOptionsMenu />
        <SidebarInsurance />
      </div>

      <div className='inpatient-section-caption'>
        <div className='inpatient-section-header'>
          <h1>Inpatient Addiction Rehab Program</h1>
          <p>        
            At Tree of Life Rehab Center, our <strong>Inpatient Program</strong> offers a safe, structured environment for individuals committed to overcoming addiction. With around-the-clock support, personalized therapy, and a range of recovery resources, we are dedicated to helping you rebuild your life free from addiction.
          </p>
        </div>

        <div className='inpatient-section-body'>
          <div className='inpatient-section-flex'>
            <div className='inpatient-section-flex-caption'>
              <h1>Comprehensive Inpatient Care</h1>
              <p>Our inpatient program provides a full spectrum of support, including medical detox, individual therapy, group counseling, and holistic treatments. Patients receive constant care in a serene, controlled environment, allowing them to focus entirely on their recovery journey without external distractions.</p>
              <p>We use evidence-based therapies, such as Cognitive Behavioral Therapy (CBT) and Motivational Interviewing, alongside wellness programs that promote mental, physical, and emotional healing. Each patient’s care plan is tailored to address their unique needs, promoting long-term sobriety and a healthier lifestyle.</p>
            </div>
            <div className='inpatient-section-flex-image'>
              <img src={InpatientOne} alt='Patient receiving inpatient care' loading='lazy'/>
            </div>
          </div>

          <div className='inpatient-section-flex flex-reverse'>
            <div className='inpatient-section-flex-image'>
              <img src={InpatientTwo} alt='Group therapy session' loading='lazy'/>
            </div>
            <div className='inpatient-section-flex-caption'>
              <h1>Supportive Environment for Lasting Change</h1>
              <p>Our inpatient program emphasizes the importance of a supportive community. Patients participate in group therapy sessions, peer support groups, and family counseling to build a strong network that encourages accountability and lasting change.</p>
              <p>With a focus on emotional resilience, we help individuals develop coping skills and strategies to handle challenges after treatment. Our compassionate team is dedicated to guiding you every step of the way, empowering you to lead a fulfilling, addiction-free life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default InpatientRehabSection;
