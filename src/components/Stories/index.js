import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Stories = () => {
  const [storyData, setStoryData] = useState(null)
  const [apiStatusForStories, setApiStatusForStories] = useState(
    apiStatusConstant.initial,
  )

  useEffect(() => {
    setApiStatusForStories(apiStatusConstant.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchData = async () => {
      const response = await fetch(url, options)
      console.log(response.ok)

      if (response.ok) {
        const data = await response.json()
        setStoryData(data.users_stories)
        setApiStatusForStories(apiStatusConstant.success)
      } else {
        console.log('ghjkjhgfdfgh')
        setApiStatusForStories(apiStatusConstant.failure)
      }
    }

    fetchData()
  }, [])

  const getStoriesView = () => (
    <div className="story-con">
      {' '}
      {storyData?.map(each => (
        <div key={each.user_id} className="story-item">
          <img src={each.story_url} alt={each.user_id} className="story-img" />
          <p>{each.user_name.substring(0, 10)}</p>
        </div>
      ))}
    </div>
  )

  const getStoriesFailureView = () => (
    <div className="failed-con">
      <img
        src="https://res.cloudinary.com/drpddho9b/image/upload/v1718431783/alert-triangle_ugz8fv.png"
        alt="alert"
      />
      <p>Something is wrong. Please try again</p>
      <button type="button">Try again</button>
    </div>
  )

  const getLoadingView = () => (
    <div data-testid="loader" className="failed-con">
      <Loader type="TailSpin" color="#2396BE" height="50" width="50" />
    </div>
  )

  const renderApiStatusViewForStories = () => {
    switch (apiStatusForStories) {
      case apiStatusConstant.success:
        return getStoriesView()
      case apiStatusConstant.failure:
        return getStoriesFailureView()
      case apiStatusConstant.inProgress:
        return getLoadingView()
      default:
        return null
    }
  }

  return (
    <div>
      <div>{renderApiStatusViewForStories()}</div>
    </div>
  )
}

export default Stories

// const Stories = () => (
//   <div>
//     <h1>Stories</h1>
//   </div>
// )

// export default Stories
