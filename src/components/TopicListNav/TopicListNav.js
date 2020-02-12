import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThreadContext from '../../contexts/MainContext'
//import countThreadsForTopic from '../Utils/Utils'

export default class TopicListNav extends Component{

  render(){
    const { topic } = this.props
    
    return (
      <div className='TopicNav'>
      <nav role="navigation">
        <ul className='TopicNav_List'>
          <Link to={`/${topic.topic_name}`} className='TopicListName'>
            <div className='TopicListItem__details'>
              <div className='TopicListItem__text'>
                <h2 className='TopicListItem__heading'>{topic.topic_name}</h2>
              </div>
            </div>
          </Link>
        </ul>
      </nav>
      </div>
    )
  }
}