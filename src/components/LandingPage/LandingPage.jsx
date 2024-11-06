import React from 'react';
import './LandingPage.css';
import { FaLongArrowAltRight } from "react-icons/fa"; // Import the arrow icon
import { Link } from 'react-router-dom'; // For routing between pages
import Man from '../../assets/man.webp';

import ContactForm from '../LandingPage/ContactForm';
import Insurance from './Insurance';
import Offer from './Offer';
import AccordionProps from './AccordionProps';
import About from './About';
import Slider from './ImageSlider';
import Services from './Services'
import RehabServices from './RehabServices';
import Mission from './Mission';

const Hero = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };


    return (
        <>
            <div className='landing'>

                <div className="landing-container container">

                        <div className='landing-caption'>
                        <h1>Nurturing Growth, Restoring Lives.</h1>
                        <p>Discover a supportive environment where your mental health journey starts. We provide the tools, guidance, and care needed to nurture your mind, helping you achieve lasting peace and balance. Your path to emotional wellbeing begins with us, right here.</p>
                            <div className='hero-btn'>
                                <Link to="/inpatient-rehab" onClick={scrollToTop}>
                                    <button className='hero-btn1'>
                                        Inpatient <FaLongArrowAltRight className='hero-arrow' />
                                    </button>
                                </Link>
                                <Link to="/outpatient-rehab" onClick={scrollToTop}>
                                <button className='hero-btn2'>
                                    Outpatient <FaLongArrowAltRight className='hero-arrow' />
                                </button>
                                </Link>
                            </div>
                        </div>

                        <div className='landing-man'>
                            <img src={Man} alt='logo' loading='lazy' />
                        </div>
                </div>
            </div>
            <Insurance />
            <About />
            <Slider />
            <Services />
            <Offer />
            <RehabServices />
            <Mission />
            <ContactForm />
        </>
    );
}

export default Hero;
