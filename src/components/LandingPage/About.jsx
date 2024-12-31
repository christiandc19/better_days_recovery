import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import './About.css'; // Import the CSS file
import AboutUs from '../../assets/our_therapies_inpatient.webp'
// import Fade from "react-reveal/Fade";
import RisingSun from '../../assets/rising-sun.webp'
import { FaHouseChimney } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiMaskSadThin } from "react-icons/pi";
import { CiFaceFrown } from "react-icons/ci";


const About = () => {
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [angle, setAngle] = useState(0); // Angle for circular motion

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Get the current scroll position
      const delta = currentScrollY - scrollY; // Calculate scroll direction

      // Update angle based on scroll direction
      if (delta > 0) {
        // Scrolling down
        setAngle((prevAngle) => prevAngle + 5); // Adjust the increment for speed
      } else if (delta < 0) {
        // Scrolling up
        setAngle((prevAngle) => prevAngle - 5); // Adjust the decrement for speed
      }

      setScrollY(currentScrollY); // Update the current scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach the scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener on unmount
    };
  }, [scrollY]);

  // Calculate X and Y positions based on angle for circular motion
  const radius = 50; // Radius of the circular motion in pixels
  const x = radius * Math.cos((angle * Math.PI) / 180); // Convert degrees to radians
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (

    <>
    <div className='about-home'>
    <div className='about-header container'>
      <h1>Who We Are</h1>
      <h2>Empowering Minds, Healing Hearts, Cultivating Peace</h2>
    </div>

    <section className="about-container container" name="toAboutMe">

      <div className="about-image">
        <img src={RisingSun} alt="RisingSun" />
      </div>


      <div className='about-flex-item'>

        <div className='about-flex'>
          <div className='about-icon'>
            <h1><GrUserManager/></h1>
          </div>
          <div className='about-caption'>
            <h1>Individual Therapy</h1>
            <p>Through compassionate guidance and evidence-based techniques, our therapists empower individuals to heal, grow, and build a foundation for lasting recovery.</p>
          </div>
        </div>


        <div className='about-flex'>
          <div className='about-icon'>
            <h1><AiOutlineUsergroupAdd/></h1>
          </div>
          <div className='about-caption'>
            <h1>Group Counseling</h1>
            <p>The Group Counseling program at Better Days Recovery fosters a supportive community where individuals share their journeys, gain insight, and build resilience together. Guided by skilled therapists, this program creates a safe space for connection, understanding, and collective healing.</p>
          </div>
        </div>

        <div className='about-flex'>
          <div className='about-icon'>
            <h1><CiFaceFrown/></h1>
          </div>
          <div className='about-caption'>
            <h1>Stress Management</h1>
            <p>It empowers individuals with effective techniques to navigate life’s challenges with resilience and clarity. Through personalized strategies and therapeutic support, we help you regain balance, reduce anxiety, and build lasting emotional well-being.</p>
          </div>
        </div>

        <div className='about-flex'>
          <div className='about-icon'>
            <h1><PiMaskSadThin/></h1>
          </div>
          <div className='about-caption'>
            <h1>Anxiety & Depression</h1>
            <p>Designed to provide personalized care and evidence-based therapies. Our supportive environment empowers individuals to regain control, find balance, and embrace a brighter, more fulfilling future.</p>
          </div>
        </div>



      </div>
    </section>
</div>
    </>
  );
};

export default About;
