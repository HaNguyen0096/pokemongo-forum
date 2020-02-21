import React, { Component} from 'react'
import DeleteComment from '../DeleteComment/DeleteComment'

export default class CommentList extends Component{
  render() {
    const { comment } = this.props
    return (
      <div className='ThreadList'>
        <h3>{comment.content}</h3>
        <DeleteComment comment = {comment}/>
      </div>      
    )
  }
}