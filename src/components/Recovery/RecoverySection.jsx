import React from 'react';
import './RecoverySection.css';
import SoberLivingImage1 from '../../assets/recovery-section.webp'; 
import WhyUS from '../WhyUsAccordion/WhyUsAccordion';
import SidebarInsurance from '../SidebarInsurance/SidebarInsurance'
const RecoverySection = () => {
  return (
    <section className="recovery-section container">
      <div className="recovery-section-content">
        {/* Sidebar */}
        <aside className="recovery-section-sidebar">
          <WhyUS />
          <SidebarInsurance />
        </aside>

        {/* Main Content */}
        <div className="recovery-section-caption">
          {/* Header */}
          <header className="recovery-section-header">
            <h1>Recovery Programs & Therapy</h1>
            <p>
            At Better Days Recovery, we understand that recovery is a deeply personal and transformative journey. Our diverse range of recovery programs and therapy options are designed to meet the unique needs of every individual. With evidence-based approaches and compassionate care, we provide the tools and support needed to heal and thrive.
            </p>
          </header>

          {/* Addiction recovery*/}
          <div className="recovery-section-flex">
            <div className="recovery-section-flex-caption">
                <h2>Comprehensive Recovery Programs</h2>
              <ol>
                <li>Detoxification Program</li>
                    <p>Safely remove harmful substances from your body under 24/7 medical supervision. Our detox program ensures comfort and minimizes withdrawal symptoms, laying a strong foundation for recovery.</p>
                <li>Inpatient Residential Program</li>
                    <p>Live in a supportive, structured environment where healing is the priority. This program includes individual therapy, group sessions, and holistic practices, all tailored to help you focus entirely on your recovery journey.</p>
                <li>Partial Hospitalization Program (PHP)</li>
                    <p>Ideal for individuals requiring intensive care without full residential stay. PHP offers a flexible schedule with access to therapy, medical monitoring, and recovery activities during the day.</p>
                <li>Intensive Outpatient Program (IOP)</li>
                    <p>Designed for those who need structured support while balancing work, school, or family obligations. IOP provides a mix of group and individual therapy sessions several times a week.</p>
                <li>Dual Diagnosis Program</li>
                    <p>Address both addiction and co-occurring mental health disorders, such as anxiety, depression, or PTSD. Our integrated approach ensures comprehensive care for both mind and body.</p>
                <li>Aftercare and Alumni Program</li>
                    <p>Recovery doesn’t end after treatment. Our aftercare program includes ongoing support groups, access to resources, and alumni events to help you stay connected and maintain long-term sobriety.</p>
              </ol>
            </div>

          </div>

            <div className="recovery-section-flex-image">
              <img src={SoberLivingImage1} alt="Supportive sober living environment" loading="lazy" />
            </div>


          {/* FNon-12 Step Rehab Program */}
          <div className="recovery-section-flex flex-reverse">

            <div className="recovery-section-flex-caption">
              <h2>Evidence-Based Therapy Options</h2>
              <ol>
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <p>Learn to identify and change negative thought patterns that contribute to addictive behaviors. CBT equips you with tools to manage stress, triggers, and cravings effectively.</p>
                <li>Dialectical Behavior Therapy (DBT)</li>
                <p>Gain skills to regulate emotions, improve relationships, and cope with distress. DBT is especially effective for individuals dealing with intense emotional challenges or trauma.</p>
                <li>Trauma-Informed Therapy</li>
                <p>Address past trauma that may be contributing to substance use. Our therapists create a safe and nurturing environment to help you heal and build resilience.</p>
                <li>Family Therapy</li>
                <p>Addiction impacts the entire family. Our family therapy sessions foster communication, understanding, and healing to rebuild trust and strengthen relationships.</p>
                <li>Group Therapy</li>
                <p>Connect with others who share similar experiences. Group therapy provides a supportive community and the opportunity to share insights, challenges, and successes.</p>
                <li>Holistic Therapies</li>
                    <ul>
                        <li>Art and Music Therapy: Express emotions and reduce stress through creative outlets.</li>
                        <li>Yoga and Meditation: Build mindfulness, reduce anxiety, and improve overall well-being.</li>
                        <li>Fitness and Nutrition Counseling: Strengthen your body and mind through healthy lifestyle choices.</li>
                    </ul>
                <li>Motivational Interviewing (MI)</li>
                <p>Develop intrinsic motivation to overcome addiction. MI helps you set achievable goals and find your personal "why" for recovery.</p>
              </ol>
            </div>

          </div>

        

        </div>
    </div>
</section>

    
  );
};

export default RecoverySection;
