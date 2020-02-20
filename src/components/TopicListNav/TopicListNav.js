import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TopicListNav extends Component{

  render(){
    const { topic } = this.props
    let count = this.props.countThread
    return (
      <div className='TopicNav'>
      <nav role="navigation">
        <ul className='TopicNav_List'>
          <Link to={`/topic/${topic.id}`} className='TopicListName'>
            <h2 className='TopicListItem__heading'>{topic.topic_name}</h2>
          </Link>
          <p>{topic.topic_content}</p>
          <p>Threads: {count}</p>
        </ul>
      </nav>
      </div>
    )
  }
}