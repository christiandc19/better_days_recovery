import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom'; // For routing between pages
import { IoIosWine } from 'react-icons/io';
import { GiPowder } from 'react-icons/gi';
import { TbPills } from "react-icons/tb";
import { GiCrystalBars } from "react-icons/gi";
import { CiPillsBottle1 } from "react-icons/ci";
import { GiThreeLeaves } from "react-icons/gi";
import { GiChestnutLeaf } from "react-icons/gi";
import { LiaPillsSolid } from "react-icons/lia";
import { GiRemedy } from "react-icons/gi";
import { FaSprayCan } from "react-icons/fa6";
import Fade from "react-reveal/Fade";

const Services = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };

  return (


    <div className='services content'>
      <div className='servicesHeader container'>
      <Fade bottom duration={3000}>
        <h1>Leave the difficulties behind.</h1>
      </Fade>
        <p>
          Whether you’re seeking help for yourself or a loved one, our holistic
          approach combines evidence-based practices with personalized care to
          address the unique needs of each individual. It’s time to take the
          first step towards a brighter future. Let us support you on this path
          to recovery.
        </p>
      </div>

      <div className='servicesItem container'>

        {/* Link for Alcohol Service with Smooth Scroll to Top */}
        <Link to="/alcoholism">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <IoIosWine className='icon' />
            </div>
            <p>Alcohol</p>
          </div>
          </Link>

        {/* Link for Cocaine Service with Navigation */}
        <Link to="/cocaine-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <GiPowder className='icon' />
            </div>
            <p>Cocaine</p>
          </div>
        </Link>

        {/* Link for Fentanyl Service with Navigation */}
        <Link to="/fentanyl-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <TbPills className='icon' />
            </div>
            <p>Fentanyl</p>
          </div>
        </Link>

        {/* Link for Meth Service with Navigation */}
        <Link to="/meth-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <GiCrystalBars className='icon' />
            </div>
            <p>Meth</p>
          </div>
        </Link>

        {/* Link for Prescription Service with Navigation */}
        <Link to="/meth-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <CiPillsBottle1 className='icon' />
            </div>
            <p>Prescription</p>
          </div>
        </Link>

        {/* Link for Kratom Service with Navigation */}
        <Link to="/kratom-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <GiThreeLeaves  className='icon' />
            </div>
            <p>Kratom</p>
          </div>
        </Link>

        {/* Link for Canabis Service with Navigation */}
        <Link to="/cannabis-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <GiChestnutLeaf  className='icon' />
            </div>
            <p>Cannabis</p>
          </div>
        </Link>

        {/* Link for Benzo Service with Navigation */}
        <Link to="/cannabis-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <LiaPillsSolid   className='icon' />
            </div>
            <p>Benzo</p>
          </div>
        </Link>

        {/* Link for Painkiller Service with Navigation */}
        <Link to="/painkiller-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <GiRemedy    className='icon' />
            </div>
            <p>Painkiller</p>
          </div>
        </Link>

        {/* Link for Inhalant Service with Navigation */}
        <Link to="/inhalant-addiction-treatment">
          <div className='icon-container' onClick={scrollToTop}>
            <div className='circular-icon'>
              <FaSprayCan     className='icon' />
            </div>
            <p>Inhalant</p>
          </div>
        </Link>

      </div>

        <div className='andMore'><h1>And More Addictive Substances</h1></div>
    </div>
  );
};

export default Services;
