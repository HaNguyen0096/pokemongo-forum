import React, {Component} from 'react'
import MainContext from '../../contexts/MainContext'
import ApiService from '../../services/api-service'
import {Section} from '../../components/Utils/Utils'
import ThreadListMain from '../../components/ThreadListMain/ThreadListMain'
import TopicListNav from '../../components/TopicListNav/TopicListNav'



export default class MainPage extends Component{

  static contextType = MainContext

  componentDidMount() {
    this.context.clearError()
    ApiService.getTopics()
      .then(this.context.setTopicList)
      .catch(this.context.setError)

    ApiService.getThreads()
      .then(this.context.setThreadList)
      .catch(this.context.setError)
  }

  renderTopicsNav(){
    const { topicList = [] } = this.context
    
    return topicList.map(topic =>
      <TopicListNav 
        key={topic.topic_name}
        topic={topic}  
      />
      )
  }

  renderThreadList(){
    const { threadList = [] } = this.context
    console.log(threadList)
    return threadList.map(thread =>
      <ThreadListMain 
        key={thread.thread_id}
        thread={thread}  
      />
      )
  }

  render(){
    const {error} = this.context
    return (
      <div className='MainPage'>
      <Section>
        <h2>Topic</h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderTopicsNav()}
          {this.renderThreadList()}
      </Section>
      {/*
      <Section>
        <h2>Threads</h2>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderThreadList()}
        </Section>*/}
      </div>
    )
  }
}