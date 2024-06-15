import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-con">
    <img
      src="https://res.cloudinary.com/drpddho9b/image/upload/v1718293585/erroring_1_ztbyog.png"
      alt="not-found"
    />
    <h2>Page Not Found</h2>
    <p>
      We are sorry, the page you requested could not be found <br />
      Please go back to the home page
    </p>
    <Link to="/">
      <button type="button">Home Page</button>
    </Link>
  </div>
)

export default NotFound
