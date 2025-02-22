import React from 'react'
import "../styling/downloads.css"
import Footer from '../pages2/Footer'
import window from '../images/windows.png'
import pinguin from '../images/pinguin.png'
import mac from '../images/mac.jpg'
import playstore from '../images/playstore.png'
import browsers from '../images/browsers.jpg'
import appstore from '../images/appstore.jpg'
import platforms from '../images/platform.png'


function Download() {
  return (
    <>
      <div className='downloads'>

        <div className="downloads-jombotron">
          <h1 className="downloads-jombotron-h1">Use TickTick across all platforms
          </h1>
          <p className="downloads-jombotron-p">Enjoy powerful features on all platforms, or use our web app</p>
        </div>

        <div className='downloads-logos margin-top'>

          <div>
            <img src={playstore} alt='logo' />
            <p>iOS & iPadOS</p>
          </div>

          <div>
            <img src={pinguin} alt='logo' />
            <p>Android Download</p>
          </div>

          <div>
            <img src={mac} alt='logo' />
            <p>Windows Download <br />
              Learn more</p>
          </div>

          <div>
            <img src={browsers} alt='logo' />
            <p>macOS Download <br />
              Learn more</p>
          </div>

          <div>
            <img src={appstore} alt='logo' />
            <p>Linux</p>
          </div>

          <div>
            <img src={window} alt='logo' />
            <p>Extension</p>
          </div>

        </div>

        
        <div className='downloads-platform-cont'>
            <img src={platforms} alt='logo' />
          </div>
      </div>

      <Footer />
    </>
  )
}

export default Download
