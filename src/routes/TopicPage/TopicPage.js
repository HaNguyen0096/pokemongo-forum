import React, { Component } from 'react'
import TopicContext from '../../contexts/TopicContext'
import ApiService from '../../services/api-service'
import {Section} from '../../components/Utils/Utils'
import ThreadListMain from '../../components/ThreadListMain/ThreadListMain'
import AddThread from '../../components/AddThread/AddThread'
import {countCommentsForThread} from '../../components/Utils/Utils'

export default class TopicPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = TopicContext
  

  componentDidMount() {
    const {topicId} = this.props.match.params
    this.context.clearError()
    ApiService.getTopic(topicId)
      .then(this.context.setTopic)
      .catch(this.context.setError)

    ApiService.getThreads(topicId)
      .then(this.context.setThreads)
      .catch(this.context.setError)

    ApiService.getComment()
       .then(this.context.setComments)
       .catch(this.context.setError)
  }


  renderThreadList(){
    const { topic , threads = [], comments = [] } = this.context
    return threads.map(thread =>
      <ThreadListMain 
        key = {thread.id}
        thread = {thread}
        topic = {topic} 
        countComments =  {countCommentsForThread(comments, thread.id )}
      />
      )
  }

  render() {
    const {topic} = this.context
    return (
      <div className='TopicPage'>
        <Section>
          <h2>{topic && topic.topic_name}</h2>
          <h4>{topic && topic.topic_content}</h4>
        </Section>
        <Section>        
        {this.renderThreadList()} 
        <h1>Add New Thread</h1>
          <AddThread />
        </Section>
      </div>
    );
  }
}