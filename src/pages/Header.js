import React from 'react'
import { Link } from 'react-router-dom'
import "../styling/styles.css"
import myimage from '../images/ticklogo.jpg'
import { useLocation } from "react-router-dom";
import SignUp from '../pages2/SignUp';



function Header() {
    const location = useLocation()
    const isPremiumPage = location.pathname === "/premium"
    const isSignIn = location.pathname === "/signin"
    const linkStyles = {
        color: isPremiumPage ? "hsla(0, 0%, 100%, 0.808)" : "rgba(25, 25, 25, 0.5)"
    }

    const buttonLink = {
        color: isPremiumPage ? "white" : "black"
    }

    const displayLink = {
        display: isSignIn ? "none" : "flex"
    }

    const signUp = {
        display: isSignIn ? "block" : "none"
    }
    return (
        <>
            <div className="header" style={{ backgroundColor: isPremiumPage ? "rgba(25, 25, 25, 0.98)" : isSignIn ? "#f3f0f0": "white"}}>
                <div className="header-content">
                    <a href='/'>
                        <img src={myimage} className='logo' alt='logo' />
                    </a>

                    <nav>

                        <div className='links' style={displayLink}>
                            <Link className="link" style={linkStyles} to="/" >Features</Link>
                            <Link className="link" style={linkStyles} to="/downloads">Download</Link>
                            <Link className="link" style={linkStyles} to="/premium">Premium</Link>
                            <Link className="link" style={linkStyles} to="/helpcenter">Help Center</Link>
                            <Link className="link" style={linkStyles} to="/signin">Sign In</Link>
                            <button className='btn' style={buttonLink}>Sign Up for Free</button>
                        </div>

                    <SignUp signUp={signUp} />
                    
                    </nav>
                </div>
            </div >
        </>
    )
}

export default Header
