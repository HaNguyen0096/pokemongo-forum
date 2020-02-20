import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class ThreadListMain extends Component{
  render() {
    const { thread, topic } = this.props
    //console.log(thread)
    //console.log(topic.id)

    return (
      <div className='ThreadList'>
        <Link to={`/topic/${topic.id}/${thread.id}`} className='ThreadListItem'>
        <div className='ThreadListItem__title'>
            <h2>{thread.thread_title}</h2>
        </div>
        </Link>
        <h3>{thread.thread_content}</h3>
      </div>      
    )
  }
}