import React from 'react'
import './styling/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function WhiteContainer({ children }) {
    return (
        <>
            <div className='features-whitecard-container1'>
                <div className='features-whitecard-container margin-top'>
                    <div className='features-whitecard-container-splitter'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhiteContainer
