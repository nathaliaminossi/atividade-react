import React from 'react'
import './Header.css'
import Botao from '../Components/Botao'


function Header() {
    return (
        <header className='header'>

            <nav className='menu'>
                <a href="">Home</a>
                <a href="">Pages</a>
                <a href="">Packege</a>
                <a href="">Destination</a>

            </nav>
            <div className='logo'>
                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="logo"style={{ width: '100px', height: 'auto' }}/>
            </div>
            <div className='btn'>
                <Botao texto="Blog" />
                <Botao texto="Contact" />
             

            </div>

        </header>




    )
}

export default Header