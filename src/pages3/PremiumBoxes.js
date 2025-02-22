import React from 'react'
import alarm from "../images/alarm.png"
import bag from "../images/bag.jpg"
import brush from "../images/brush.png"
import music from "../images/music.png"
import plus from "../images/plus.png"
import promo from "../images/promo.png"


function PremiumBoxes() {
    return (
        <>
            <div className='muchmore-grid-cont'>
                <div className='muchmore-grid-item'>
                    <div className='grid-item-img'>
                        <img src={alarm} alt='logo' />
                        <h3>Reminders for check item</h3>

                    </div>

                    <p>Set up reminders for check item and get reminded separately.</p>
                </div>

                <div className='muchmore-grid-item'>
                    <div className='grid-item-img'>
                        <img src={bag} alt='logo' />
                        <h3>Calendar widgets</h3>
                    </div>

                    <p>Check your agenda on home screen</p>
                </div>

                <div className='muchmore-grid-item'>
                    <div className='grid-item-img'>
                        <img src={promo} alt='logo' />
                        <h3>Estimated Pomo</h3>

                    </div>

                    <p>Set up estimated Pomo for tasks and calculate the time consumption for each task.</p>

                </div>

                <div className='muchmore-grid-item'>
                    <div className='grid-item-img'>
                        <img src={brush} alt='logo' />
                        <h3>Premium themes</h3>

                    </div>

                    <p>10+ amazing themes - pick whichever you like.</p>

                </div>

                <div className='muchmore-grid-item'>
                    <div className='grid-item-img'>
                        <img src={music} alt='logo' />
                        <h3>Premium white noises</h3>  

                    </div>

                    <p>More white noises options when using the Pomo Timer.</p>
                </div>

                <div className='muchmore-grid-item'>
                    <div className='grid-item-img'>
                        <img src={plus} alt='logo' />
                        <h3>Quick Ball for Android</h3>
                        
                    </div>

                    <p>Quickly add new tasks from the lock screen.</p>
                </div>


            </div>
        </>
    )
}

export default PremiumBoxes
