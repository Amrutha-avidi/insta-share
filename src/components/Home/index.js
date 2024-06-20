import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import Stories from '../Stories'
import Posts from '../Posts'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <NavBar />
      <Stories />
      <Posts />
    </div>
  )
}

export default Home
