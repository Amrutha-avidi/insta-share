import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'
import Cookies from 'js-cookie'

import {useState} from 'react'

import './index.css'

const PostItem = props => {
  const {postData} = props
  const {
    comments,
    createdAt,
    likeStatus,
    likesCount,
    postDetails,
    postId,
    profilePic,
    userId,
    userName,
  } = postData

  const {caption, imageUrl} = postDetails
  const [liked, setLiked] = useState(likeStatus)
  const [count, setCount] = useState(likesCount)

  //   let updatedLikes = likesCount

  const renderLiked = () => {
    const url = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({like_status: liked}),
    }
    const fetchStatus = async () => {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
    }
    fetchStatus()
  }

  const increaseLikeCount = () => {
    setLiked(!liked)
    setCount(prevCount => prevCount + 1)
    renderLiked()
  }
  const decreaseLikeCount = () => {
    setLiked(!liked)
    setCount(prevCount => prevCount - 1)

    renderLiked()
  }

  return (
    <div className="post-item-con">
      <div className="profile-con">
        <img className="profile-img" src={profilePic} alt={userName} />
        <p>{userName}</p>
      </div>
      <img className="post" src={imageUrl} alt={userName} />
      <div className="post-content">
        <div className="icons-con">
          {liked ? (
            <FcLike onClick={decreaseLikeCount} />
          ) : (
            <BsHeart onClick={increaseLikeCount} />
          )}
          <FaRegComment />
          <BiShareAlt />
        </div>
        <p>{count} likes</p>
        <p className="caption">{caption}</p>
        {comments.map(each => (
          <div key={each.userId}>
            <span>{each.userName}</span> {each.comment}
          </div>
        ))}
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default PostItem
