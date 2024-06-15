import {useState} from 'react'
import {Navigate} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [redirect, setRedirect] = useState(false)

  const loginUser = async e => {
    e.preventDefault()
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const token = data.jwt_token

    if (response.ok) {
      Cookies.set('jwt_token', token, {expires: 30})
      setRedirect(true)
    } else {
      setShowError(true)
      setErrorMsg('Enter your Username and Password')
      setRedirect(false)
    }
  }
  if (redirect) {
    return <Navigate to="/" />
  }

  return (
    <div className="login-con">
      <img
        src="https://res.cloudinary.com/drpddho9b/image/upload/v1718255874/login_img_eq2h6m.png"
        alt="login-img"
      />
      <div className="login-cred">
        <div className="logo-con">
          <img
            src="https://res.cloudinary.com/drpddho9b/image/upload/v1718256221/logo_z0fn9m.png"
            alt="logo"
          />
          <h2>Insta Share</h2>
        </div>
        <form onSubmit={loginUser}>
          <div>
            <label htmlFor="name">USERNAME</label>
            <input
              htmlFor="name"
              type="text"
              placeholder="username"
              value={username}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {showError ? <p className="error-msg">*{errorMsg}</p> : null}
        </form>
      </div>
    </div>
  )
}

export default Login
