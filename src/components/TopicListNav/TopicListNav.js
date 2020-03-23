import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TopicList.css'

export default class TopicListNav extends Component{

  render(){
    const { topic } = this.props
    let count = this.props.countThread
    return (
      <div className='topicNav'>
      <nav role="navigation">
        <ul className='topicNav_List'>
          <div className='topicNameBar'>            
            <Link to={`/topic/${topic.id}`} className='topicNames'>
              <FontAwesomeIcon icon='folder'/> {topic.topic_name}                       
            </Link>
          </div>
          <p className='topicDescription'>{topic.topic_content}</p>
          <p className='countThread'>Threads: {count}</p>
          
        </ul>
      </nav>
      <hr />
      </div>
    )
  }
}