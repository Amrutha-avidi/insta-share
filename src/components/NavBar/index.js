import {FaSearch} from 'react-icons/fa'
import {useHistory, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import SearchContext from '../../Context/SearchContext'

import './index.css'

const NavBar = () => {
  const history = useHistory()

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SearchContext.Consumer>
      {value => {
        const {
          searchText,
          updateSearchText,
          changeStatusOfSearchComponent,
        } = value

        const onChangeSearch = event => {
          updateSearchText(event.target.value)
        }

        const searchComponentStatusChange = () => {
          changeStatusOfSearchComponent()
        }

        return (
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
                <input
                  type="search"
                  value={searchText}
                  onChange={onChangeSearch}
                />
                <button type="button" onClick={searchComponentStatusChange}>
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
                style={{
                  textDecoration: 'None',
                  fontSize: '17px',
                  fontWeight: '600',
                }}
              >
                Profile
              </Link>
              <button type="submit" className="logout" onClick={logout}>
                {' '}
                Logout
              </button>
            </div>
          </div>
        )
      }}
    </SearchContext.Consumer>
  )
}
export default NavBar
