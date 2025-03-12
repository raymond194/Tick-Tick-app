import React from 'react'
import { Link } from 'react-router-dom'
import "../styling/styles.css"
import myimage from '../images/ticklogo.jpg'
import { useLocation } from "react-router-dom";
import SignUp from '../pages2/SignUp';
import { Button, Modal, ModalHeader } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function Header() {
    const [modal, setModal] = useState(false)
    const location = useLocation()
    const isPremiumPage = location.pathname === "/premium"
    const isSignIn = location.pathname === "/signin"
    const linkStyles = {
        color: isPremiumPage ? "hsla(0, 0%, 100%, 0.808)" : "rgba(25, 25, 25, 0.5)"
    }

    const linkStyles2 = {
        color: isPremiumPage ? "hsla(0, 0%, 100%, 0.808)" : "black"
    }

    const buttonLink = {
        color: isPremiumPage ? "white" : "rgba(0, 0, 0, .50)",
    }

    const displayLink = {
        display: isSignIn ? "none" : "flex"
    }

    const signUp = {
        display: isSignIn ? "block" : "none"
    }

    function ModalHeader() {
        setModal(prev => !prev)
    }

    return (
        <>
            <div className="header" style={{ backgroundColor: isPremiumPage ? "rgba(25, 25, 25, 0.98)" : isSignIn ? "#f3f0f0" : "white" }}>
                <div className="header-content">
                    <a href='/'>
                        <img src={myimage} className='logo' alt='logo' />
                    </a>

                    <div className={`header-content-links ${isSignIn ? "hide1" : "display1"}`}>
                        <Link className="link" style={linkStyles} to="/" >Features</Link>
                        <Link className="link" style={linkStyles} to="/downloads">Download</Link>
                        <Link className="link" style={linkStyles} to="/premium">Premium</Link>
                        <Link className="link" style={linkStyles} to="/helpcenter">Help Center</Link>
                        <Link className="link" style={linkStyles} to="/signin">Sign In</Link>
                        <button className='btn' style={buttonLink}>Sign Up for Free</button>
                        <SignUp signUp={signUp} />
                    </div>

                    {modal ? <FontAwesomeIcon style={{ color: isPremiumPage ? "white" : "rgba(0, 0, 255, 0.80)" }} onClick={ModalHeader} className='hamburge' icon={faXmark} /> : <FontAwesomeIcon style={{ color: isPremiumPage ? "white" : "rgba(0, 0, 255, 0.80)" }} onClick={ModalHeader} className='hamburge' icon={faBars} />}



                </div>

                {modal && <div className={`second-header-links ${isSignIn ? "hide1" : "display1"} ${isPremiumPage ? "premiumblack" : "premiumwhite"}`}>
                    <Link className="link2" style={linkStyles2} to="/" >Features</Link>
                    <hr className={`${isPremiumPage ? "premiumblack" : "premiumwhite"}`} />
                    <Link className="link2" style={linkStyles2} to="/downloads">Download</Link>
                    <hr className={`${isPremiumPage ? "premiumblack" : "premiumwhite"}`} />
                    <Link className="link2" style={linkStyles2} to="/premium">Premium</Link>
                    <hr className={`${isPremiumPage ? "premiumblack" : "premiumwhite"}`} />
                    <Link className="link2" style={linkStyles2} to="/helpcenter">Help Center</Link>
                    <hr className={`${isPremiumPage ? "premiumblack" : "premiumwhite"}`} />
                    <Link className="link2" style={linkStyles2} to="/signin">Sign In</Link>
                    <hr className={`${isPremiumPage ? "premiumblack" : "premiumwhite"}`} />
                    <Link className="link2" style={linkStyles2} to="/signin">Sign Up for Free</Link>

                </div>}
            </div >
        </>
    )
}

export default Header
