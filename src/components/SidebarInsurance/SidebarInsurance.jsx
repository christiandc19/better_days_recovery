 import React from 'react'
 import './SidebarInsurance.css'
 import Aetna from '../../assets/aetna.png'
 import Anthem from '../../assets/anthem.png'
 import Beacon from '../../assets/beacon.png'
 import BlueCross from '../../assets/bluecross.png'
 import Cigna from '../../assets/cigna.png'
 import Horizon from '../../assets/horizon.png'
const SidebarInsurance = () => {
  return (
    <div className='sidebar-insurance'>
        <div className='sidebar-header'>
            <h1>WE WORK WITH MAJOR INSURANCE</h1>
        </div>
        <div className='sidebar-insurance-flex'>
            <div className='sidebar-insurance-flexItem'>
                <img src={Aetna} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Anthem} alt='Aetna Insurance' loading='lazy'/>
            </div>

            <div className='sidebar-insurance-flexItem'>
                <img src={BlueCross} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Beacon} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Cigna} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Horizon} alt='Aetna Insurance' loading='lazy'/>
            </div>



        </div>
    </div>
  )
}

export default SidebarInsurance
