import React from 'react'
import "../styling/styles.css"
function FeaturesBoxes() {
  return (
    <>
      <div className='features-boxes margin-top'>
          <div className='features-box-width'>
            <div className='features-box'>
              <h3>Constant Reminder</h3>
              <p>  With constant reminder, notifications will keep ringing until you handle them.</p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Repeat Reminder</h3>
              <p>With recurring rules like weekly, monthly, yearly and custom ones at your service, you'll never forget a thing.</p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>NLP</h3>
              <p>Smart time recognition from your input when adding tasks, with automatic reminders set.</p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Filter</h3>
              <p>Easily customize filters like "high-priority tasks for this week" to view quickly.
              </p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Keyboard Shortcuts
              </h3>
              <p>Use shortcuts and command menus to perform quick operations.
              </p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Collaboration</h3>
              <p>Share lists with friends and colleagues, assign tasks, and improve collaboration.</p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Integration</h3>
              <p>Subscribe calendar and integrate with other apps. Manage all matters in TickTick.</p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Statistics</h3>
              <p>Track tasks, focus duration, and habit logs to get a comprehensive view of your progress.</p>
            </div>
          </div>

          <div className='features-box'>
            <div className='features-box-width'>
              <h3>Theme</h3>
              <p>Choose from 40+ themes to customize your personalized productivity tool.</p>
            </div>
          </div>
        </div>

    </>
  )
}

export default FeaturesBoxes
