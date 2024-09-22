import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="app-container">
    <div className="logo">
      <span>[</span>
      <span>)</span>
      <span>digitalflake</span>
    </div>
    <div className="content">
      {/* Add your app content here */}
    </div>
    <div className="profile">
      <Link to = "/logout"><span className="user-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </span></Link>
    </div>
  </div>
  )
}

export default Navbar