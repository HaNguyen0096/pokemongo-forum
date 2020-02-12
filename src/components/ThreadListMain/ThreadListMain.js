import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class ThreadListMain extends Component{
  render() {
    const { thread } = this.props
    console.log(this.props)

    return (
      <Link to={`/threads/${thread.thread_id}`} className='ThreadListItem'>
        <div className='ThreadListItem__details'>
            <h2 className='ThreadListItem__heading'>{thread.title}</h2>
            <h3>{thread.content}</h3>
        </div>
      </Link>
    )
  }
}