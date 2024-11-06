import React from 'react';
import './OutpatientRehabSection.css';
import OutpatientOne from '../../../assets/psychologist-with-notebook-and-patient.webp';  // Add relevant images
import OutpatientTwo from '../../../assets/group-therapy.webp';

import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';


const OutpatientRehabSection = () => {
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
          <h1>Outpatient Addiction Treatment Program</h1>
          <p>
            At Tree of Life Rehab Center, our <strong>Outpatient Program</strong> provides flexible and effective treatment options for individuals seeking recovery without the need for a residential stay. This program is ideal for those who require structured support while maintaining work, family, or school commitments.
          </p>
        </div>

        <div className='addiction-section-body'>
          <div className='addiction-section-flex'>
            <div className='addiction-section-flex-caption'>
              <h1>Customized Outpatient Care</h1>
              <p>
                Our outpatient program offers a personalized treatment plan that includes therapy, support groups, and relapse prevention. We focus on empowering individuals through evidence-based therapies such as Cognitive Behavioral Therapy (CBT) and motivational interviewing to build coping strategies and prevent relapse. <br />
                With the flexibility to attend sessions on a schedule that suits your lifestyle, our outpatient program allows you to progress at your own pace while receiving the high-quality care needed to overcome addiction and regain control.
              </p>
            </div>
            <div className='addiction-section-flex-image'>
              <img src={OutpatientOne} alt='Outpatient program session' loading='lazy' />
            </div>
          </div>

          <div className='addiction-section-flex flex-reverse'>
            <div className='addiction-section-flex-image'>
              <img src={OutpatientTwo} alt='Group therapy session' loading='lazy' />
            </div>
            <div className='addiction-section-flex-caption'>
              <p>
                Our program incorporates group therapy and individual counseling to address both the emotional and behavioral aspects of addiction. These sessions provide a supportive environment where participants can share experiences, learn coping skills, and build a strong recovery network.
              </p><br />
              <p>
                Additionally, we offer family counseling as part of our outpatient services, helping to heal relationships and create a strong support system at home. Our dedicated team is committed to guiding you through each step of your recovery journey.
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

export default OutpatientRehabSection;
