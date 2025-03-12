import React from 'react'
import featuresImg1 from "../images/featuresImg1.jpg"
import featuresimg2 from "../images/featuresimg2.jpg"
import editors from "../images/Editors.png"
import app from "../images/Appoftheday.png"
import rating from "../images/ratings.png"
import WhiteContainer from '../WhiteContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styling/styles.css"
import tab from '../images/tab.avif'
import lifehack from '../images/lifehacker.png'
import lifehack2 from '../images/lifehacker img.png'
import mkbhd from '../images/mkbhd.png'
import wirecutter from '../images/wirecutter.png'
import verge from '../images/the_verge.png'
import mashable from '../images/mashable.png'
import trends from '../images/digitaltrends.png'
import platform from '../images/platform.png'
import replace1 from '../images/replace1.jpg'
import replace2 from '../images/replace2.jpg'
import replace3 from '../images/replace3.jpg'


import gizmodo from '../images/gizmodo.png'
import central from '../images/androidcentral.png'
import authority from '../images/androidauthority.png'
import make from '../images/makeuseof.png'
import calender from '../images/calendar.jpg'
import Footer from '../pages2/Footer'
import FeaturesComment from '../pages3/FeaturesComment'
import FeaturesBoxes from '../pages3/FeaturesBoxes'

function Features() {
  return (
    <>
      <div className='features'>
        <div className="feature-jombotron">
          <h1 className="feature-jombotron-h1">Stay Organized,
            Stay Creative.
          </h1>
          <p className="feature-jombotron-p">Join millions of people to captuqre ideas, organize life, and do something creative.</p>

          <div className='feature-jombotron-buttons'>
            <button className=" rounded-pill feature-jombotron-button1">Get Started</button>
            <button className='btn feature-jombotron-button border-1px border-solid border-primary rounded-pill text-primary'>Download</button>
          </div>
        </div>

        <div className='features-images-container'>
            <img src={featuresImg1} alt="todoimg" className='featuresimg1' />
        </div>

        <div className='features-ratings-images'>
          <img src={editors} className='features-ratings-img' alt='editors' />
          <img src={rating} className='features-ratings-img' alt='ratings' />
          <img src={editors} className='features-ratings-img' alt='editors' />
          <img src={app} className='features-ratings-img' alt='editors' />
        </div>


        <WhiteContainer>
          <div className='features-whitecard-text'>
            <p className="text-primary">Todo List</p>
            <h2>Organize everything in your life</h2>
            <p>Whether it's work projects, personal tasks, or study plans, TickTick helps you organize and confidently tackle everything in your life</p>
          </div>

          <div className='features-whitecard-image'>
            <img src={replace1} className='features-images' alt='image' />
          </div>
        </WhiteContainer>


        <WhiteContainer>
          <div className='features-whitecard-image'>
            <img src={replace2} className='features-images' alt='image' />
          </div>

          <div className='features-whitecard-text'>
            <p className="text-primary">
              Calendar Views</p>
            <h2>Easily plan your schedule</h2>
            <p>Different calendar views like monthly, weekly, daily, and agenda offer diverse choices for planning your time more efficiently.</p>
          </div>
        </WhiteContainer>

        <WhiteContainer>
          <div className='features-whitecard-text'>
            <p className="text-primary">
              Calendar Views</p>
            <h2>Easily plan your schedule</h2>
            <p>Different calendar views like monthly, weekly, daily, and agenda offer diverse choices for planning your time more efficiently.</p>
          </div>

          <div className='features-whitecard-image'>
            <img src={replace3} className='features-images' alt='image' />
          </div>
        </WhiteContainer>

        <div className='features-headings margin-top'>
          <h2 className="text-primary">Powerful and intuitive features</h2>
          <h3>Simplify your daily planning</h3>
        </div>

        <div className='white-unique-container'>
          <div className='white-container-unique margin-top'>

            <div className='white-container-unique-links'>
              <a className="unique-link" href='#'>Calender </a>
              <a className="unique-link" href='#'> Kanban </a>
              <a className="unique-link" href='#'> Matrix </a>
              <a className="unique-link" href='#'> Eisenhower Matrix </a>
              <a className="unique-link" href='#'> Sticky Note </a>
            </div>

            <div className='white-container-unique-splitter'>
              <div className='features-whitecard-image'>
                <img src={calender} className='features-images2' alt='image' />
              </div>

              <div className='features-whitecard-text-unique'>
                <h4>Efficient Calendar Views</h4>
                <p>Monthly View gives a clear overall layout.</p>
                <p>Weekly View clarifies busy and free intervals.</p>
                <p>Agenda View ensures tasks are executed in order.</p>
                <p>Multi-Day View enables dynamic adjustments.</p>
                <p>Multi-Week View lets you shift weeks for changes.</p>
              </div>
            </div>

          </div>
        </div>

        <div className='features-headings margin-top'>
          <h2 className="text-primary">Rich and diverse features</h2>
          <h3>Meet your unique needs</h3>
        </div>

       <FeaturesBoxes />
        
        <div style={{ textAlign: "center" }} className='margin-top'>
          <button style={{ color: "grey", fontSize: "17px" }} className='btn btn-rimary'>More </button>
        </div>

        <WhiteContainer>
          <img src={platform} alt='tab' className='features-tab-img1' />
        </WhiteContainer>

        <div className='features-headings margin-top'>
          <h2 className="text-primary">Recommended by top media</h2>
          <h3>Standing out among other apps</h3>
        </div>

        <WhiteContainer>
          <div className='features-log2-cont'>
            <div className='features-logo2-seperator'>
              <img src={lifehack} width="40px" alt='logo' />
              <h2 style={{ fontSize: "16px" }}> lifehacker</h2>
            </div>
            <p>My favourite app of the entire year is my todo list app. I love it so much its my everything</p>
          </div>
        </WhiteContainer >

        <div className='features-list-logos-cont'>
          <img src={mkbhd} className='features-list-logo' alt='logos' />
          <img src={wirecutter} className='features-list-logo' alt='logos' />
          <img src={verge} className='features-list-logo' alt='logos' />
          <img src={mashable} className='features-list-logo' alt='logos' />
          <img src={trends} className='features-list-logo' alt='logos' />
          <img src={lifehack2} className='features-list-logo' alt='logos' />
          <img src={gizmodo} className='features-list-logo' alt='logos' />
          <img src={central} className='features-list-logo' alt='logos' />
          <img src={authority} className='features-list-logo' alt='logos' />
          <img src={make} className='features-list-logo' alt='logos' />
        </div>

        <div className='features-headings margin-top'>
          <h2 className="text-primary">Highly rated by users</h2>
          <h3>Ongoing updates to stay preferred</h3>
        </div>

        <FeaturesComment />

        <div className="feature-jombotron margin-top">
          <h1 className="feature-jombotron-h1 text-primary" style={{ fontSize: "29px", marginTop: "30px" }}>Get ready to be more productive
          </h1>
          <p className="feature-jombotron-p"></p>

          <div className='feature-jombotron-buttons'>
            <button className="btn btn-primary rounded-pill feature-jombotron-button">Get Started</button>
            <button className='btn feature-jombotron-button border-1px border-solid border-primary rounded-pill text-primary'>Download</button>
          </div>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default Features
