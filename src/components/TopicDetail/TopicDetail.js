import React, { Component} from 'react'

export default class TopicDetail extends Component{
  render() {
    const { topic } = this.props
    console.log(topic)
    return (
      <div className='TopicDetail'>
        {/* <h2>{topic.topic_name}</h2>
        <h4>{topic.topic_content}</h4> */}
        aaa
      </div>      
    )
  }
}