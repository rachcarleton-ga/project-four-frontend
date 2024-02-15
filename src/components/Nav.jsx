import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ user, handleLogOut }) => {

  
  let userOptions
  if (user) {
    userOptions = (
        <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
        <NavLink to="/arrived">
                <h4>Explored Destinations </h4>
            </NavLink>
            <NavLink to="/goal">
                <h4>Dream Destinations </h4>
            </NavLink>
      </nav>
      </div>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </nav>
  )

  return (
    <header>
      <NavLink to="/">
        <div className="logo-wrapper" alt="logo">
          <img

          />
        </div>
      </NavLink>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav