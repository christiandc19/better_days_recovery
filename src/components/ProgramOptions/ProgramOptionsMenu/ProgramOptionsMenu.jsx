import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

import './ProgramOptionsMenu.css'

const ProgramOptionsMenu = () => {

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
      };

  return (
    <div className='program-options-menu'>
        <h1>Levels Of Care Options</h1>
        <Link to="/addiction-program" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Addiction Treatment Program</p></Link>
        <Link to="/detox-program" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Detox Program</p></Link>
        <Link to="/outpatient-rehab" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Outpatient Program</p></Link>
        <Link to="/inpatient-rehab" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Inpatient Program</p></Link>
        <Link to="/dual-diagnosis-program" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Dual Diagnosis </p></Link>
        <Link to="/medication-assisted-program" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Medication Assisted Program</p></Link>
        <Link to="/veterans-addiction-treatment-program" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Veterans Addiction Treatment</p></Link>
    </div>
  )
}

export default ProgramOptionsMenu