import React from 'react';
import './VeteransAddictionSection.css';
import Image1 from '../../../assets/veterans_section_image1.webp';  // Add relevant images
import Image2 from '../../../assets/veterans_section_image2.webp';
import ProgramOptionsMenu from '../../ProgramOptions/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';


const VeteransAddictionSection = () => {
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
          <h1>Veterans Addiction Treatment Program</h1>
          <p>        
            At Better Days Recovery Center, we are dedicated to providing specialized support for veterans facing addiction challenges. Our Veterans Addiction Treatment Program is tailored to address the unique experiences and needs of military veterans, offering a pathway to recovery that honors their service while supporting their healing.
          </p>
        </div>

        <div className='addiction-section-body'>

          <div className='addiction-section-flex'>
            <div className='addiction-section-flex-caption'>
              <h1>Comprehensive Care for Veterans</h1>
              <p>
                Veterans often face distinct challenges that can lead to substance use, including PTSD, depression, and other service-related trauma. Our program integrates evidence-based therapies, such as Cognitive Behavioral Therapy (CBT) and Eye Movement Desensitization and Reprocessing (EMDR), to address these underlying issues and promote lasting recovery.
                <br /> Our team understands the complexities of military life and provides compassionate, respectful care designed to meet each veteran’s personal recovery goals. We work to help veterans break free from addiction, regain their health, and rebuild a fulfilling life post-service.
              </p>
            </div>
            <div className='addiction-section-flex-image'>
              <img src={Image1} alt='Veteran in recovery' loading='lazy'/>
            </div>
          </div>

          <div className='addiction-section-flex flex-reverse'>
            <div className='addiction-section-flex-image'>
              <img src={Image2} alt='Support group meeting for veterans' loading='lazy'/>
            </div>
            <div className='addiction-section-flex-caption'>
              <p>
                Our Veterans Addiction Treatment Program includes specialized support groups and community-based activities that foster camaraderie and peer support. These programs help veterans build connections with others who understand their experiences, providing strength and solidarity in recovery.
              </p>
              <br />
              <p>
                Additionally, our Medication-Assisted Treatment (MAT) options offer safe, effective relief from withdrawal symptoms, helping veterans stabilize and begin their healing journey with confidence. Our experienced team is dedicated to supporting veterans every step of the way, ensuring they receive the tools and support needed to overcome addiction.
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

export default VeteransAddictionSection;
