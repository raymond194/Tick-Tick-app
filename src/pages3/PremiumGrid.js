import React from 'react'
import calender from "../images/grid-calendar.png"
import smartlist from "../images/smart-list.png"
import limit from "../images/limit.png"
import activity from "../images/activity.png"
import Statistics from "../images/statistics.png"

function PremiumGrid() {
    return (
        <>
            <div className='grid-container'>
                <div className='grid-writing'>
                    <h1>Full calendar functionality</h1>
                    <p>Access more calendar views. Set both start and end dates</p>
                    <p>to tasks. You can even subscribe to third-party calendars.</p>
                </div>

                <img src={calender} className="grid-image" alt='gridcalender' />
            </div>

            <div className='grid-container'>
                <img src={smartlist} className="grid-image" alt='gridcalender' />

                <div className='grid-writing'>
                    <h1>Customize filters</h1>
                    <p> Unlock the "Filter" feature, and be as flexible as you need with all the Lists.</p>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-writing'>
                    <h1>Create more, achieve more</h1>
                    <p> Folder, List, Task, Check item - complex projects are handled as a breeze </p>
                    <a href="#" style={{ color: "orangered" }}>Know More</a>
                </div>

                <img src={limit} className="grid-image" alt='gridcalender' />
            </div>

            <div className='grid-container'>
                <img src={activity} className="grid-image" alt='gridcalender' />

                <div className='grid-writing'>
                    <h1>Keep everything under control</h1>
                    <p>View previous changes for all tasks and lists. Keep track of your shared projects </p>
                    <a href="#" style={{ color: "orangered" }}>Know More</a>
                </div>

            </div>

            <div className='grid-container'>
                <div className='grid-writing'>
                    <h1>Track your progress</h1>
                    <p>Check the progress of each task, or see what you've achieved with the "Historical Statistics" feature. </p>
                </div>

                <img src={Statistics} className="grid-image" alt='gridcalender' />

            </div>

        </>
    )
}

export default PremiumGrid
