import React, { Component } from 'react'

const TopicListContext = React.createContext({
  topicList: [],
  threadList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopicList: () => {},
  setThreadList: () => {},
})

export default TopicListContext

export class TopicListProvider extends Component {
  state = {
    topicList: [],
    threadList: [],
    error: null,
  };

  setTopicList = topicList => {
    this.setState({topicList})
  }

  setThreadList = threadList => {
    this.setState({threadList})
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      topicList: this.state.topicList,
      threadList: this.state.threadList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTopicList: this.setTopicList,
      setThreadList: this.setThreadList,
    }
    return (
      <TopicListContext.Provider value={value}>
        {this.props.children}
      </TopicListContext.Provider>
    )
  }
}
