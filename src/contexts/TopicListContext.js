import React, { Component } from 'react'

const TopicListContext = React.createContext({
  topicList: [],
  user: null,
  error: null,
  setUser: () => {},
  setError: () => {},
  clearError: () => {},
  setTopicList: () => {},
})

export default TopicListContext

export class TopicListProvider extends Component {
  state = {
    user: null,
    topicList: [],
    error: null,
  };

  setUser = user => {
    this.setState({user})
  }

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
      user: this.state.user,
      error: this.state.error,
      setUser: this.setUser,
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
