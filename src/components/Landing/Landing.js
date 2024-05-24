import React from 'react'
import Typewriter from 'typewriter-effect'
import xlr8 from '../../assets/xlr8.png'
import './Landing.css'
const Landing = () => {
    return (
        <div className='landing-container'>
            <div data-aos="fade-right" className='landing-left'>
                <h1 className='landing-header'>How is your typing speed?....</h1>
                <div className='typewriter-container'>
                    <Typewriter
                        options={{
                            strings: ['Slow?', 'Medium?', 'Fast?'],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>


            <div data-aos="fade-left" className='landing-right'>
                <img src={xlr8} alt='XLR8' className='xlr8-image' />
            </div>
        </div>
    )
}

export default Landing