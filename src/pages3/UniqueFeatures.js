import React from 'react'
import sticker from '../images/sticker.jpg';
import timeline from '../images/timeline.jpg';
import platform from '../images/crossPlatform.jpg';
import widget from '../images/widget.jpg';
import desktop from '../images/desktop.jpg';
import summary from '../images/note-summary.jpg';

function UniqueFeatures() {
    return (
        <>

            <div className='unique-features margin-top2'>

                <div className='unique-features-box'>
                    <img src={timeline} alt='uniqueimages' />

                    <div className='box-writings'>
                        <h1>Timeline View</h1>
                        <p>Lighter Gantt chart, clear view of time scheduling.</p>
                    </div>
                </div>

                <div className='unique-features-box'>
                    <img src={platform} alt='uniqueimages' />

                    <div className='box-writings'>
                        <h1>Cross-Platform Support</h1>
                        <p> Enhance productivity with cross-platform support and easy syncing.</p>
                    </div>
                </div>

                <div className='unique-features-box'>
                    <img src={widget} alt='uniqueimages' />

                    <div className='box-writings'>
                        <h1>Widgets</h1>
                        <p>Customize your workspace with a variety of widgets for quick access.</p>
                    </div>
                </div>

                <div className='unique-features-box'>
                    <img src={sticker} alt='uniqueimages' />

                    <div className='box-writings'>
                        <h1>Desktop Sticky Notes</h1>
                        <p>Keep your to-dos front and center with desktop Sticky Notes.</p>
                    </div>
                </div>

                <div className='unique-features-box'>
                    <img src={summary} alt='uniqueimages' />

                    <div className='box-writings'>
                        <h1>Notes and Summary</h1>
                        <p>Collect information and save inspiration anytime, anywhere.</p>
                    </div>
                </div>

                <div className='unique-features-box'>
                    <img src={desktop} alt='uniqueimages' />

                    <div className='box-writings'>
                        <h1>Desktop Shortcuts</h1>
                        <p>Streamline your workflow with keyboard shortcuts and command menus.Timeline View</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UniqueFeatures
