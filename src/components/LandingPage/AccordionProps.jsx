import React from 'react';
import Accordion from '../../components/LandingPage/Accordion';
import './AccordionProps.css'
import medicalProfessional from '../../assets/group_of_friends.webp'


function AccordionProps() {
  const accordionItems = [
    {
      title: 'Comprehensive Addiction Rehab Programs',
      content: 'Our rehab programs cover a wide range of substance use disorders, including alcohol, opioids, prescription medications, and more. With a personalized approach, each treatment plan is tailored to address the specific needs of the individual, ensuring the highest chance of long-term recovery.'
    },
    {
      title: 'Holistic Mental Health Recovery',
      content: 'At Renewal, we believe in treating both the mind and body. Our mental health recovery programs incorporate therapy, counseling, and wellness activities to foster healing and balance. Whether you are dealing with depression, anxiety, or trauma, our team is here to guide you every step of the way.'
    },
    {
      title: 'Detox and Withdrawal Management',
      content: 'Safely navigating the detox phase is crucial to a successful recovery. Our medically supervised detox services ensure that clients experience minimal discomfort and receive 24/7 care to manage withdrawal symptoms in a safe environment.'
    },
    {
      title: 'Individual and Group Therapy',
      content: 'We provide a variety of therapeutic options to support your recovery journey. Through individual therapy, you’ll explore personal challenges, while group therapy offers community support from peers who understand your experiences. Both formats are designed to promote growth and healing.'
    },
    {
      title: 'Aftercare and Relapse Prevention',
      content: 'Recovery is a lifelong process. We offer robust aftercare services, including ongoing therapy, support groups, and relapse prevention planning to ensure you have the resources and community you need to maintain sobriety after leaving our facility.'
    },
    {
      title: 'Dual Diagnosis Treatment',
      content: 'For individuals with co-occurring disorders (addiction and mental health issues), our dual diagnosis treatment addresses both conditions simultaneously. This integrated approach ensures comprehensive care, reducing the risk of relapse and improving overall mental health.'
    },
    {
      title: 'Evidence-Based Treatment Methods',
      content: 'Tree Of Live Rehab employs evidence-based treatment methods such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Medication-Assisted Treatment (MAT). These approaches have been scientifically proven to aid in both addiction recovery and mental health management.'
    }
  ];

  return (
    <>
    <div className='accordionFlex'>
      <div className="accordionProps">
        <h1>Reasons to Choose Tree of Life Rehab</h1>
        <Accordion items={accordionItems} />
      </div>

    </div>
    </>
  );
}

export default AccordionProps;
