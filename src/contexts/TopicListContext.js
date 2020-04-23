import React, { Component } from 'react'

const TopicListContext = React.createContext({
  topicList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopicList: () => {},
})

export default TopicListContext

export class TopicListProvider extends Component {
  state = {
    topicList: [],
    error: null,
  };

  setTopicList = topicList => {
    this.setState({topicList})
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTopicList: this.setTopicList,
    }
    return (
      <TopicListContext.Provider value={value}>
        {this.props.children}
      </TopicListContext.Provider>
    )
  }
}
