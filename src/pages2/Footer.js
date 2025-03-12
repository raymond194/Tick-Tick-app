import React from 'react'
import "../styling/styles.css"
function Footer() {
  return (
    <>
      <div className='features-footer-container'>
        <div className='features-footer'>
          <div className='features-footer-link'>
            <p>products</p>
            <a href='#'>Get started</a>
            <a href='#'>Download Apps</a>
            <a href='#'>Premium</a>
            <a href='#'>Education Offer</a>
            <a href='#'>Gift Cards</a>
          </div>

          <div className='features-footer-link'>
            <p>Support</p>
            <a href='#'>Help Center</a>
            <a href='#'>FAQ</a>
            <a href='#'>Translations</a>
          </div>

          <div className='features-footer-link'>
            <p>Resources</p>
            <a href='#'>URL Scheme</a>
            <a href='#'>Refer Friends & Earn</a>
            <a href='#'>Integrations</a>
          </div>

          <div className='features-footer-link'>
            <p>About</p>
            <a href='#'>About Us</a>
            <a href='#'>Blog</a>
            <a href='#'>Media</a>

          </div>

          <div className='features-footer-link'>
            <p>legal</p>
            <a href='#'>Terms</a>
            <a href='#'>Privacy</a>
            <a href='#'>License</a>
            <a href='#'>Security</a>
          </div>

          <div className='features-footer-link'>
            <select name="fruit">
              <option selected value="apple">English</option>
              <option value="banana">達成更多，
                用心生活。</option>
              <option value="orange">Функции</option>
              <option value="grape">francais</option>
              <option value="grape">機能紹介</option>
            </select>
          </div>
        </div>
        <hr style={{ marginTop: "20px", marginBottom: "40px" }} />
        <p style={{ paddingBottom: "20px", color: "grey" }}>© 2025 TickTick Team </p>
      </div>
    </>
  )
}

export default Footer
