import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/helpcenter.css'
import { useState } from 'react';
import HelpCenterBoxes from '../pages3/HelpCenterBoxes';
import feedback from '../images/feedback.png';
import HelpCenterBoxes2 from '../pages3/HelpCenterBoxes2';
import UniqueFeatures from '../pages3/UniqueFeatures';
import Footer2 from '../pages2/Footer2';





function HelpCenter() {
  const [input, setInput] = useState("")
  return (
    <>
      <div className='helpcenter'>
        <div className='helpcenter-header-cont margin-top'>
          <h1>How can we <span className='text-primary'>help you?</span></h1>
          <input placeholder="Search" className='form-control' type="text" value={input} onChange={e => setInput(e.target.value)} />
        </div>

        <HelpCenterBoxes />

        <h2 className='font-weight margin-top2'>Feature Guide</h2>

        <HelpCenterBoxes2 />

        <h2 className='font-weight margin-top2'>Unique Features</h2>

        <UniqueFeatures />

        <div className='helpcenter-positioning margin-top'>
          <div className='position-content'>
            <img src={feedback} alt='help' />
            <div className='position-content-overlay'>
              <h1>Need more help?</h1>
              <button className='btn btn-primary'>Contact Us</button>
            </div>
          </div>
        </div>

      </div>

      <div className='margin-top}'>
        <Footer2 />
      </div>
    </>
  )
}

export default HelpCenter
