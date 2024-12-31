import React from "react";
import './DualDiagnosisProgram.css'; // CSS for styling
import OutpatientOne from '../../../assets/dual_diagnosis.webp';  // Add relevant images
import OutpatientTwo from '../../../assets/group-therapy.webp';

import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';


const DualDiagnosisProgram = () => {
  return (

<>
  <div className='dual-diagnosis-section container'>
    <div className='dual-diagnosis-section-content'>
      <div className='dual-diagnosis-section-sidebar'>
        <ProgramOptionsMenu />
        <SidebarInsurance />
      </div>

      <div className='dual-diagnosis-section-caption'>

        <div className='dual-diagnosis-section-header'>
          <h1>Dual Diagnosis Program</h1>
          <p>        
            At Better Days Recovery Center, our Dual Diagnosis Program provides a comprehensive approach to treating both substance use disorders and co-occurring mental health conditions. Our dedicated team is here to support you through a structured, evidence-based treatment plan tailored to address each unique challenge on your journey to recovery.
          </p>
        </div>

        <div className='dual-diagnosis-section-body'>

          <div className='dual-diagnosis-section-flex'>
            <div className='dual-diagnosis-section-flex-caption'>
              <h1>Integrated Substance and Mental Health Treatment</h1>
              <p>
                Our Dual Diagnosis Program combines substance use treatment with mental health care, creating a holistic approach that addresses the full spectrum of your needs. We offer a range of therapies including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and trauma-focused counseling to treat both the addiction and underlying mental health issues. 
                <br /><br />
                With personalized support and a team dedicated to helping you rebuild a healthier life, we aim to foster long-term recovery and emotional stability. Whether you’re struggling with depression, anxiety, trauma, or other mental health conditions, our program is designed to provide a safe, supportive environment for healing.
              </p>
            </div>
            <div className='dual-diagnosis-section-flex-image'>
              <img src={OutpatientOne} alt='Individual in therapy for dual diagnosis' loading='lazy'/>
            </div>
          </div>

          <div className='dual-diagnosis-section-flex flex-reverse'>
            <div className='dual-diagnosis-section-flex-image'>
              <img src={OutpatientTwo} alt='Counselor supporting patient with dual diagnosis' loading='lazy'/>
            </div>
            <div className='dual-diagnosis-section-flex-caption'>
              <p>
                Our program includes Medication-Assisted Treatment (MAT) for those who need help managing withdrawal symptoms and cravings, as well as psychiatric care to stabilize and support mental health. By combining medical and therapeutic support, we create a strong foundation for sustainable recovery.
              </p><br />
              <p>
                We understand that each individual's journey is unique, and our compassionate team is here to guide you through each step, providing comprehensive care and ongoing support. Let us help you regain control, find hope, and build a fulfilling life in recovery.
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

export default DualDiagnosisProgram;
