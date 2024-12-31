import React from 'react';
import './AdmissionsSection.css';
import Form from './AdmissionForm'

const AdmissionsSection = () => {
  return (
    <section className="admissions-section">
      <div className="admissions-section-content">
        {/* Sidebar */}
        <aside className="admissions-section-sidebar">
          <Form />
          {/* <WhyUS />
          <SidebarInsurance /> */}
        </aside>

        {/* Main Content */}
        <div className="admissions-section-caption">
          {/* Header */}
          <header className="admissions-section-header">
            <h1>Admission Process at Better Days Recovery</h1>
            <p>
            At Better Days Recovery, we make the journey to healing as seamless as possible. Our admission process is designed to provide clarity, comfort, and support from your first interaction with us. Here's how it works:
            </p>
          </header>



          {/* Consultation */}

          <div className="admissions-section-flex flex-reverse">
            <div className="admissions-section-flex-caption">
              <h2>1. Confidential Consultation</h2>
              <p>
              Reach out to our compassionate admissions team through a phone call, email, or online form. We’ll listen to your story, understand your needs, and answer any questions you may have. All conversations are private and judgment-free.
              </p>
            </div>
          </div>

          {/* Assessment and Pre-Approval */}

          <div className="admissions-section-flex flex-reverse">
            <div className="admissions-section-flex-caption">
              <h2>2. Assessment and Pre-Approval</h2>
              <p>
              Our experienced team will conduct a brief assessment to determine the appropriate level of care. This includes gathering information about your medical history, substance use, and personal goals. If necessary, we’ll verify your insurance benefits and outline payment options.
              </p>
            </div>
          </div>

          {/* Personalized Treatment Plan */}

          <div className="admissions-section-flex flex-reverse">
            <div className="admissions-section-flex-caption">
              <h2>3. Personalized Treatment Plan</h2>
              <p>
              Our experienced team will conduct a brief assessment to determine the appropriate level of care. This includes gathering information about your medical history, substance use, and personal goals. If necessary, we’ll verify your insurance benefits and outline payment options.
              </p>
            </div>
          </div>

          {/* Scheduling Your Admission */}

          <div className="admissions-section-flex flex-reverse">
            <div className="admissions-section-flex-caption">
              <h2>4. Scheduling Your Admission</h2>
              <p>
              We’ll work with you to find the best time for admission. Whether you need immediate assistance or prefer to plan ahead, our team will coordinate every detail to make your transition as smooth as possible.
              </p>
            </div>
          </div>


          {/* Welcome to Better Days Recovery */}

          <div className="admissions-section-flex flex-reverse">
            <div className="admissions-section-flex-caption">
              <h2>5. Welcome to Better Days Recovery</h2>
              <p>
              On the day of your admission, you’ll be greeted by our caring staff, who will guide you through the onboarding process. From settling into your accommodations to meeting your treatment team, we’re here to support you every step of the way.
              </p>
            </div>
          </div>


          {/* Start Your Journey Today */}

          <div className="admissions-section-flex flex-reverse">
            <div className="admissions-section-flex-caption">
              <h2>Start Your Journey Today</h2>
              <p>
              Your recovery begins with a single step. Contact Better Days Recovery today and take that step toward a brighter future. We’re here to help you grow, heal, and thrive.
              </p>
            </div>
          </div>

  </div>

    
      </div>




    </section>

    
  );
};

export default AdmissionsSection;
