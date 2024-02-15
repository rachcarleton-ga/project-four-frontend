import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ user, handleLogOut }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    const closeMenu = () => {
      setMenuOpen(false);
    };

    const handleLogOutAndCloseMenu = () => {
      handleLogOut();
      closeMenu();
    };

  let userOptions
  if (user) {
    userOptions = (
      <>
        <NavLink to="/" className="nav-link" 
        onClick={closeMenu}>
          Destination Wanderlust
          </NavLink>
        <NavLink to="/arrived" className="nav-link"
         onClick={closeMenu}>
                <h4>Explored Destinations </h4>
            </NavLink>
            <NavLink to="/goal" className="nav-link" 
            onClick={closeMenu}>
                <svg xmlns="https://image.shutterstock.com/image-vector/airplane-icon-vector-transportation-logo-260nw-1283834365.jpg" width="24" height="24" fill="currentColor" class="airplane" viewBox="0 0 16 16">
          <path d="M8 .576l1.82 4.405h4.665l-3.573 2.925 1.82 4.405-3.664-2.85L4.488 16 8 13.258l3.512 2.742-.437-1.067-3.665-2.85-3.572 2.925H1.515L3.334.576z"/>
        </svg>
                <h4>Dream Destinations </h4>
            </NavLink>
        <NavLink to="/" className="nav-link" 
        onClick={handleLogOutAndCloseMenu}>
          Sign Out
        </NavLink>
      </>
    )
  }

  const publicOptions = (
    <>
      <NavLink to="/" className="nav-link"
      onClick={closeMenu}>Destination Wanderlust</NavLink>
      <NavLink to="/register" className="nav-link"
      onClick={closeMenu}>Register</NavLink>
      <NavLink to="/signin" className="nav-link"
      onClick={closeMenu}>Sign In</NavLink>
    </>
  )

  return (
    <header>
      <nav className='navigation'>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`}
      onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {user && userOptions}
        {!user && publicOptions}
      </div>
      </nav>
    </header>
  )
}

export default Nav