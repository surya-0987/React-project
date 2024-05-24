import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <img src={logo} className='hyper-logo' alt='Hyper Type' />
                <p className='hyper-logo-text'>HyperType</p>
            </div>
            <div className='nav-right'>
                <p className='nav-right-text'>Surya</p>
            </div>
        </div>
    )
}

export default Nav
