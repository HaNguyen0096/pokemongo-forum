import React, { Component} from 'react'

export default class CommentList extends Component{
  render() {
    const { comment } = this.props
    console.log(comment)
    return (
      <div className='ThreadList'>
        <h3>{comment.content}</h3>
      </div>      
    )
  }
}