import React from 'react';
import './TreatmentSection.css';
import SoberLivingImage1 from '../../assets/treatment-section.webp'; 
import SoberLivingImage2 from '../../assets/sober_living_2.webp';
import WhyUS from '../WhyUsAccordion/WhyUsAccordion';
import SidebarInsurance from '../SidebarInsurance/SidebarInsurance';

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


const TreatmentSection = () => {
  return (
    <section className="treatment-section container">
      <div className="treatment-section-content">

        {/* Main Content */}
        <div className="treatment-section-caption">
          {/* Header */}
          <header className="treatment-section-header">
            <h1>Comprehensive Residential Addiction Treatment at Better Days Recovery</h1>
            <p>
            At Better Days Recovery, we are dedicated to helping individuals achieve long-term recovery through our comprehensive residential addiction treatment program. Our personalized approach ensures that each client receives the care and support they need to overcome addiction and regain control of their lives.
            </p>
          </header>

          {/* Addiction Treatment*/}
          <div className="treatment-section-flex">
            <div className="treatment-section-flex-caption">
              <h2>Specialized Treatment for All Substance Use Disorders</h2>
              <p>
              Our program addresses a wide range of substance use challenges, including:
              </p>
              <ul>
                <li>Alcohol Addiction</li>
                <li>Opioid Addiction: Painkillers such as OxyContin and Vicodin</li>
                <li>Heroin Addiction</li>
                <li>Cocaine Addiction</li>
                <li>Methamphetamine (Meth) Addiction</li>
                <li>Benzodiazepine Addiction: Including withdrawal management for drugs like Xanax and Klonopin</li>
                <li>Prescription Medication Addiction</li>
                <li>Inhalant Addiction: Commonly referred to as huffing</li>
                <li>MDMA Addiction: Includes substances like Molly and Ecstasy</li>
              </ul>
            </div>

          </div>

            <div className="treatment-section-flex-image">
              <img src={SoberLivingImage1} alt="Supportive sober living environment" loading="lazy" />
            </div>

          {/* FNon-12 Step Rehab Program */}
          <div className="treatment-section-flex flex-reverse">

            <div className="treatment-section-flex-caption">
              <h2>Non-12 Step Rehab Program</h2>
              <p>
              Better Days Recovery offers a Non-12 Step Rehab Program designed to provide an alternative to traditional 12-step recovery models. Recognizing that recovery is not a one-size-fits-all journey, we offer diverse tools and strategies to support lasting sobriety.
              </p>
              
              <p>
              While our program doesn’t focus on teaching the 12 steps, we encourage clients to adopt any techniques that aid their recovery. Each program is fully personalized because no two individuals or addictions are alike. Our clients benefit from one-on-one sessions and group therapies, creating a balanced approach to recovery.
              </p>

              <p>We also utilize a wide range of treatment modalities tailored to each person’s unique goals and needs.</p>
            </div>

          </div>

          {/* Dual Diagnosis Treatment */}
          <div className="treatment-section-flex flex-reverse">

            <div className="treatment-section-flex-caption">
              <h2>Dual Diagnosis Treatment</h2>
              <p>
              The Dual Diagnosis Treatment Program at Better Days Recovery addresses the challenges of co-occurring disorders, such as substance addiction combined with mental health conditions like anxiety, PTSD, or depression.
              </p>
              
              <p>
              One of the core goals of dual diagnosis treatment is identifying and treating the root causes of both issues simultaneously, ensuring comprehensive care. Our expert team, composed of licensed Doctorate- and Masters-level clinicians, is highly qualified to handle these complexities.
              </p>

              <div className='treatment-btn'>
             <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
               <Link to="/dual-diagnosis-program">
                <button>Learn More</button>
                </Link>
            </LinkRoll>
             </div>

            </div>

          </div>


          <div className="treatment-section-flex-caption">
              <h2>Medication-Assisted Treatment (MAT)</h2>
              <p>
              Medication-Assisted Treatment (MAT) at Better Days Recovery is a proven, evidence-based approach for addressing opioid and heroin addiction. By combining FDA-approved medications with counseling and behavioral therapies, MAT treats the whole person, promoting a safe and effective recovery process.
              </p>
              
              <p>
              This treatment is especially effective for detoxing from alcohol, opioids, benzodiazepines, and heroin, offering a comfortable and supportive environment during the process.
              </p>

              <div className='treatment-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
               <Link to="/medication-assisted-program">
                <button>Learn More</button>
                </Link>
            </LinkRoll>

             </div>

          </div>


          <div className="treatment-section-flex-caption">
              <h2>Treatment Modalities and Therapies</h2>
              <p>
              Better Days Recovery employs a wide array of evidence-based modalities to address substance addiction and mental health disorders. Core therapies like Cognitive Behavioral Therapy (CBT) explore the connection between thoughts, emotions, and behaviors, empowering clients to break negative patterns.
              </p>
              
              <p>
              Additional therapies include:
              </p>

              <ul>
                <li>Dialectical Behavior Therapy (DBT)</li>
                <li>Eye Movement Desensitization and Reprocessing (EMDR)</li>
                <li>Somatic Experiencing</li>
                <li>Motivational Enhancement Therapy (MET)</li>
                <li>Acceptance and Commitment Therapy (ACT)</li>
                <li>Relapse Prevention Therapy (RPT), and more.</li>
              </ul>
              <p>Each client undergoes a thorough assessment to determine the most effective therapies for their recovery.</p>
          </div>



          <div className="treatment-section-flex-caption">
              <h2>Incidental Medical Services (IMS)</h2>
              <p>
              At Better Days Recovery, Incidental Medical Services (IMS) ensure clients receive safe and comprehensive care during detox and substance use treatment. These supplemental services, available 24/7, include obtaining medical histories, administering necessary tests, and overseeing the self-administration of medications.
              </p>
              
              <p>
              IMS enhances the safety of recovery services, paving the way for long-term success.
              </p>
          </div>


          <div className="treatment-section-flex-caption">
              <h2>Detox Program</h2>
              <p>
              Our medically supervised detox program is specifically designed for individuals who may feel uncertain about managing withdrawal symptoms on their own. Detoxing without professional support can vary widely in intensity—ranging from discomfort and pain to potentially life-threatening complications, depending on the substance and individual circumstances. This is why it’s essential to carefully evaluate your situation and consider whether a supervised detox is the safest option for your recovery.
              </p>
              
             <div className='treatment-btn'>
             <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
               <Link to="/detox-program">
                <button>Learn More</button>
                </Link>
            </LinkRoll>
             </div>
          </div>


          <div className="treatment-section-flex-caption">
              <h2>Residential Program Treatment</h2>
              <p>
              Our residential program is thoughtfully designed to provide a supportive and nurturing environment for individuals working to overcome drug and alcohol addiction. Situated in a treatment facility that resembles the comfort of home, this program prioritizes healing in a safe, structured setting. Clients benefit from personalized treatment plans that are tailored to their unique needs, ensuring that every aspect of their journey is addressed with care and precision.
              </p>
              <p>Throughout their stay, individuals engage in a variety of therapeutic activities and daily routines, aimed at fostering physical, emotional, and mental well-being. From one-on-one counseling sessions to group therapy and holistic approaches, our program offers a comprehensive pathway to recovery. Additionally, our dedicated team of healthcare professionals provides consistent monitoring and encouragement, creating a sense of community and trust that is essential for lasting change.</p>
              <p>By focusing on individualized care and creating a warm, welcoming environment, our residential program helps clients navigate the challenges of addiction recovery while building the skills and resilience needed for long-term success.</p>
              <br />
              
              <div className="treatment-section-flex-image">
                <img src={SoberLivingImage2} alt="Sober living community gathering" loading="lazy" />
              </div>


        </div>


        <div className="treatment-section-flex-caption">
              <h2>After Care Program</h2>
              <p>
              Our Aftercare Program is an essential component of the recovery journey, providing ongoing support and resources to ensure lasting success beyond the initial treatment phase. Recognizing that the transition back to daily life can be challenging, our program equips clients with the tools and guidance needed to maintain sobriety and prevent relapse.
              </p>
              <p>This program is designed to offer a seamless continuation of care, tailored to each individual’s progress and personal goals. It includes access to regular check-ins, counseling sessions, and support groups to foster accountability and a sense of community. Clients are also provided with strategies for managing triggers, stress, and other challenges that may arise as they reintegrate into their routines.</p>
              <p>Additionally, we work closely with clients to develop long-term plans for maintaining their recovery, including connections to local resources, employment assistance, and opportunities for personal growth. By building a robust support network and empowering individuals with confidence and skills, our Aftercare Program ensures that recovery is not just a phase but a sustainable and fulfilling way of life.</p>
              
        </div>


  </div>


        {/* Sidebar */}
        <aside className="treatment-section-sidebar">
          <WhyUS />
          <SidebarInsurance />
        </aside>






        
        
      </div>




    </section>

    
  );
};

export default TreatmentSection;
