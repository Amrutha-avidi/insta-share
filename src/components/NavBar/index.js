import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import './index.css'

const NavBar = () => (
  <div className="navbar-con">
    <div>
      <img
        src="https://res.cloudinary.com/drpddho9b/image/upload/v1718256221/logo_z0fn9m.png"
        alt="logo"
      />
      <h3>Insta Share</h3>
    </div>
    <div>
      <div className="search-con">
        <input type="search" />
        <button type="button">
          {' '}
          <FaSearch testid="searchIcon" />
        </button>
      </div>
      <Link
        to="/"
        style={{
          textDecoration: 'None',
          fontSize: '17px',
          fontWeight: '600',
        }}
      >
        Home
      </Link>
      <Link
        to="/my-profile"
        style={{textDecoration: 'None', fontSize: '17px', fontWeight: '600'}}
      >
        Profile
      </Link>
      <button type="submit" className="logout">
        {' '}
        Logout
      </button>
    </div>
  </div>
)

export default NavBar
