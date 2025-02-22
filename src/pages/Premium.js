import React from 'react'
import "../styling/premium.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import PremiumGrid from '../pages3/PremiumGrid';
import PremiumBoxes from '../pages3/PremiumBoxes';
import Footer2 from '../pages2/Footer2';



function Premium() {
  return (
    <>
      <div className='premium-jombotron-gradient'>
        <div className='premium-jombotron'>
          <h1>Boost your productivity with TickTick Premium</h1>
          <p>Unlock all premium features on all platforms. Enjoy your organized life to the fullest.</p>
          <button>UPGRADE NOW</button>
          <span>Annual plan for $35.99 less than $3/month</span>
        </div>
      </div>

      <div className='premium1'>
        <div className='premium'>
          <PremiumGrid />

          <h1 className='muchmore'>And so much more...</h1>

          <PremiumBoxes />

          <div className='jumbotron2 margin-top'>
            <h1>Ready to accomplish more with Premium?</h1>
            <button>GO AHEAD</button>
            <span>Annual plan for $35.99 {"("}less than $3/mont{")"}</span>
          </div>

          <div className='jumbotron3'>
            <div>
              <h4>How I get a refund?</h4>
              <p>Yes, you can apply for a refund within 14 days after purchase. Please submit a ticket via Feedback in the app. Meanwhile, to avoid getting charged again, you're suggested to cancel the subscription from the platform where you purchased TickTick Premium. Please note that if you purchased via App Store on iPhone, you should apply for the refund from Apple.</p>
            </div>

            <div>
              <h4>If I forget to renew my subscription, will I lose all my data?</h4>
              <p>You will not lose your data such as lists, tasks, images, etc.; however, you won't be able to add more or use any other premium features until you complete the renewal.</p>
            </div>

            <div>
              <h4>How can I cancel the subscription?</h4>
              <p> If you upgrade via PayPal on the web, please enter your PayPal and find "Manage automatic payments," then choose TickTick to cancel.</p>

              <p> If you upgrade via Play Store on your Android device, please open Play Store app, tap "Account" in sidebar and tap "Subscriptions," then find TickTick to cancel.</p>

              <p> If you upgrade via iTunes on your iOS device, please open TickTick app, tap Avatar, "My Premium," scroll down and tap "Manage" at the bottom, then find TickTick to cancel.</p>
            </div>

            <div>
              <h4>What if I have other questions?</h4>
              <p>Please look for more guides at the Help Center via <a href="#">https://help.ticktick.com.</a></p>
            </div>
          </div>
        </div>

        <Footer2 />
      </div>
    </>
  )
}

export default Premium
