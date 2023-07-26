import React from 'react'
import { Link } from 'react-router-dom'
import FEDomain from '../lib/FEDomain'

function GlobalNavBar() {
  return (
    <ul className='nav' style={{backgroundColor: 'rgba(211,211,211,.95)'}}>
        <li className='nav-item'>
            <Link className='nav-link' to={`${FEDomain}`} >Home</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to={`${FEDomain}/questionsets`}>Question Sets</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to={`${FEDomain}/search`}>Search</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to={`${FEDomain}/register`}>Register</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to={`${FEDomain}/login`}>Login</Link>
        </li>
    </ul>
  )
}

export default GlobalNavBar