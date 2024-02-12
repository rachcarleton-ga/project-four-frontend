import { NavLink } from 'react-router-dom'

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
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img

          />
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav