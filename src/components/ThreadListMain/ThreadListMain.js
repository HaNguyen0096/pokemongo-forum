import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class ThreadListMain extends Component{
  render() {
    const { thread } = this.props
    //console.log(this.props)

    return (
      <div className='ThreadList'>
        <Link to={`/threads/${thread.thread_id}`} className='ThreadListItem'>
        <div className='ThreadListItem__title'>
            <h2>{thread.title}</h2>
        </div>
        </Link>
        <h3>{thread.content}</h3>
      </div>      
    )
  }
}