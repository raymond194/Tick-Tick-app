import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp({signUp}) {
    return (
        <>
            <div className='mt-3' style={signUp}>
                <span className='mt- mx-3 ' style={{fontSize: "12px"}}>Don't have an account?</span>
                <button className='btn btn-primary' style={{fontSize: "14px"}}>Sign Up for Free</button>
            </div>
        </>
    )
}

export default SignUp
