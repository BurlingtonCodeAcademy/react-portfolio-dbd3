import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
            <div id='header'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/experience'>Experience</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/hobbies'>Hobbies</Link>
            </div>
    )
}

export default Header