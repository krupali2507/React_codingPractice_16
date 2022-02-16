// Write your code here
// import {formatDistanceToNow} from 'date-fns'
import './index.css'

const LikeImage =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const LikedImage =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {commentDetails, onIsLikeOrNot, onClickingDelete} = props
  const {id, name, comment, bgColor, isLike, date} = commentDetails
  const initialName = name[0].toUpperCase()
  //   const postedTime = formatDistanceToNow(date)

  const onClickingLikeBtn = () => {
    onIsLikeOrNot(id)
  }

  const onClickingDeleteBtn = () => {
    onClickingDelete(id)
  }

  const likeClassName = isLike ? LikedImage : LikeImage
  const likeTextClass = isLike ? 'active' : ''

  return (
    <li className="comment-container">
      <div className="name-comment-container">
        <p className={`person-logo ${bgColor}`}>{initialName}</p>
        <div className="sub-div">
          <p>
            {name} <span>{date} ago</span>
          </p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-delete-div">
        <button
          type="button"
          className={`like-btn ${likeTextClass}`}
          onClick={onClickingLikeBtn}
        >
          Like
          <img src={likeClassName} alt="like" />
        </button>
        <button
          type="button"
          className="like-btn"
          onClick={onClickingDeleteBtn}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
