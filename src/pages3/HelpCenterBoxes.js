import React from 'react'
import '../styling/helpcenter.css'
import whatsnew from '../images/new.png'
import beginner from '../images/beginner.png'
import faQ from '../images/faq.png'
import design from '../images/design.png'
import practice from '../images/best-practice.png'

function HelpCenterBoxes() {
    return (
        <>
            <div className='helpcenter-boxes margin-top'>

                <div className='helpcenter-box'>
                    <img src={beginner} alt='guides' />
                    <p>Beginner's Guide</p>
                </div>

                <div className='helpcenter-box'>
                    <img src={practice} alt='guides' />
                    <p>Best Practices</p>
                </div>

                <div className='helpcenter-box'>
                    <img src={faQ} alt='guides' />
                    <p>FAQ</p>
                </div>

                <div className='helpcenter-box'>
                    <img src={design} alt='guides' />
                    <p>Design Principles</p>
                </div>

                <div className='helpcenter-box'>
                    <img src={whatsnew} alt='guides' />
                    <p>What's New</p>
                </div>
            </div>
        </>
    )
}

export default HelpCenterBoxes

