import React, { Component } from 'react'
import MainContext from '../../contexts/MainContext'
import ApiService from '../../services/api-service'
import {Section} from '../../components/Utils/Utils'
import ThreadListMain from '../../components/ThreadListMain/ThreadListMain'
import {getThreadsForTopic} from '../../components/Utils/Utils'


export default class TopicPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = MainContext

  componentDidMount() {
    ApiService.getThreads()
      .then(this.context.setThreadList)
      .catch(this.context.setError)
  }

  renderThreadList(){
    const { threadList = [] } = this.context
    const topicName = this.props.match.params.topicName
    const ThreadForTopic = getThreadsForTopic(threadList, topicName)
    return ThreadForTopic.map(thread =>
      <ThreadListMain 
        key={thread.thread_id}
        thread={thread}  
      />
      )
  }
  render() {
    return (
      <Section>
        <h2>Threads</h2>
        {this.renderThreadList()}
      </Section>
    );
  }
}