import React from 'react'
import { Link } from 'react-router-dom'
import "../styling/styles.css"
import myimage from '../images/ticklogo.jpg'
import { useLocation } from "react-router-dom";
import SignUp from '../pages2/SignUp';
import { Navbar, Nav, Container } from "react-bootstrap";



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
            <div className="header" style={{ backgroundColor: isPremiumPage ? "rgba(25, 25, 25, 0.98)" : isSignIn ? "#f3f0f0" : "white" }}>
                <div className="header-content">
                    <a href='/'>
                        <img src={myimage} className='logo' alt='logo' />
                    </a>

                    <Navbar bg={isPremiumPage ? "dark" : "light"} variant="dark" expand="lg" >
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: isPremiumPage ? "black" : "black" }}>
                                <span className="navbar-toggler-icon" style={{backgroundColor: isPremiumPage ? "black" : "black" }}></span>
                            </Navbar.Toggle>

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto d-flex flex-column flex-lg-row">
                                    <Link className="link" style={linkStyles} to="/" >Features</Link>
                                    <Link className="link" style={linkStyles} to="/downloads">Download</Link>
                                    <Link className="link" style={linkStyles} to="/premium">Premium</Link>
                                    <Link className="link" style={linkStyles} to="/helpcenter">Help Center</Link>
                                    <Link className="link" style={linkStyles} to="/signin">Sign In</Link>
                                    <button className='btn' style={buttonLink}>Sign Up for Free</button>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <SignUp signUp={signUp} />
                </div>
            </div >
        </>
    )
}

export default Header
