import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      bgColor: initialClassName,
      isLike: false,
      date: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onIsLikeOrNot = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onClickingDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="form-image-div">
          <div className="form-carousal">
            <p>Say something about 4.0 Technologies</p>
            <form className="form-carousal" onSubmit={this.onSubmitComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="input-class"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                type="textarea"
                placeholder="Your Comment"
                className="input-class"
                cols="20"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
        </div>
        <hr className="line" />
        <p>
          <span className="comment-count">{commentsList.length}</span>Comments
        </p>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              onIsLikeOrNot={this.onIsLikeOrNot}
              onClickingDelete={this.onClickingDelete}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
