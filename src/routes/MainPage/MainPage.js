import React, {Component} from 'react'
import TopicListContext from '../../contexts/TopicListContext'
import ApiService from '../../services/api-service'
import {Section} from '../../components/Utils/Utils'
import TopicListNav from '../../components/TopicListNav/TopicListNav'
import './MainPage.css'



export default class MainPage extends Component{

  static contextType = TopicListContext

  componentDidMount() {
    this.context.clearError()
    ApiService.getTopics()
      .then(this.context.setTopicList)
      .catch(this.context.setError)
  }

  renderTopicsNav(){
    const { topicList } = this.context
    return topicList.map(topic =>
      <TopicListNav 
        key={topic.id}
        topic={topic}
        countThread = {topic.number_of_threads}
      />
      )
  }

  render(){
    const {error} = this.context
    console.log(this.context)
    return (
      // <div className='MainPage'>
      <Section className='MainPage'>
        <div className='Welcome_Message'> 
        <p>Welcome to the forum, feel free to ask any question!</p>
        </div>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderTopicsNav()}
      </Section>      
      // </div>
    )
  }
}