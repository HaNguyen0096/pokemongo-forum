import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import  moment  from 'moment-timezone'
import './ThreadListMain.css'

export default class ThreadListMain extends Component{
  render() {
    const { thread, topic, countComments } = this.props
    const time = moment(thread.modified).tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a')
    return (
      <div className='threadList'>
        <div className='threadBar'>
          <Link to={`/topic/${topic.id}/${thread.id}`} className='threadTitle'>
            {thread.thread_title}
          </Link>
        </div>       
        <div className='threadContent'>{thread.thread_content}</div>
        <div className='threadTime'>{time}</div>
        <div className='CountLike'>
          <p>Comments: {countComments}</p>
          {/* <button className='likesBtn'> Likes: {thread.likes}</button> */}
        </div>
        <hr />
      </div>      
    )
  }
}