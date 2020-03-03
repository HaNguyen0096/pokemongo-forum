import React, { Component} from 'react'
import DeleteComment from '../DeleteComment/DeleteComment'
import  moment  from 'moment-timezone'
import './CommentList.css'

export default class CommentList extends Component{
  render() {
    const { comment } = this.props
    const time = moment(comment.modified).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a')
    return (
      <div className='commentList'>
        <div className='commentContent'><h5>{comment.content}</h5></div>
        <div className='commentTime'>{time}</div>
        <div className='dltComment'><DeleteComment comment = {comment}/></div>
        <hr className='cmthr'/>
      </div>      
    )
  }
}