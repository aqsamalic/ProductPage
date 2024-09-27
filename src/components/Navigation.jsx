import React from 'react'

const Navigation = () => {
  return (
    <nav className='container'>
    <div className='logo'>
     <img src='images/Nike-Logo.png' alt='logo' width={60} height={60} />  
    </div>
    <ul>
     <li href='#'>Menu </li>
     <li href='#'>Location</li>
     <li href='#'>About</li>
     <li href='#'>Contact</li>
    </ul>
    <button>Login</button>
     </nav>
  )
}

export default Navigation