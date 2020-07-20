import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Header(props) {
    console.log(props)
    return (
            <div id='header'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/hobbies'>Hobbies</Link>
            </div>
    )
}

export default Header