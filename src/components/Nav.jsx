import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import airplaneIcon from '../images/airplaneIcon.png'
import earthIcon from '../images/earthIcon.png'
import passportIcon from '../images/passportIcon.png'
import luggageIcon from '../images/luggageIcon.png'
import registerIcon from '../images/registerIcon.png'

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
          <img src={earthIcon} alt="Earth Icon" className="globe-icon" />
          Destination Wanderlust
        </NavLink>
        <NavLink to="/arrived" className="nav-link"
          onClick={closeMenu}>
          <img src={passportIcon} alt="Passport Icon" className="passport-icon" />
          <h4>Explored Destinations </h4>
        </NavLink>
        <NavLink to="/goal" className="nav-link"
          onClick={closeMenu}>
          <img src={airplaneIcon} alt="Airplane Icon" className="airplane-icon" />
          <h4>Dream Destinations </h4>
        </NavLink>
        <NavLink to="/" className="nav-link"
          onClick={handleLogOutAndCloseMenu}>
          <img src={luggageIcon} alt="Luggage Icon" className="luggage-icon" />
          Sign Out
        </NavLink>
      </>
    )
  }

  const publicOptions = (
    <>
      <NavLink to="/" className="nav-link"
        onClick={closeMenu}>
                    <img src={earthIcon} alt="Earth Icon" className="globe-icon" />
          Destination Wanderlust</NavLink>
      <NavLink to="/register" className="nav-link"
        onClick={closeMenu}>
                    <img src={registerIcon} alt="Register Icon" className="globe-icon" />
          Register</NavLink>
      <NavLink to="/signin" className="nav-link"
        onClick={closeMenu}>
                    <img src={luggageIcon} alt="Luggage Icon" className="luggage-icon" />
          Sign In</NavLink>
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