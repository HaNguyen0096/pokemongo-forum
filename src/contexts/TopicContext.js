import React, {Component} from 'react'

const TopicContext = React.createContext({
  topic: null,
  threads: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopic: () => {},
  clearTopic: () => {},
  setThreads: () => {},
  addThread: () => {},
})

export default TopicContext

export class TopicProvider extends Component {

  state = {
    topic: null,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setTopic = topic => {
    this.setState({ topic })
  }

  setThreads = threads => {
    this.setState({ threads })
  }

  clearTopic = () => {
    this.setTopic(null)
    this.setThreads([])
  }

  addThread = thread => {
    this.setThreads([
      ...this.state.threads,
      thread
    ])
  }

  render(){
    const value = {
      topic: this.state.topic,
      threads: this.state.threads,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTopic: this.setTopic,
      setThreads: this.setThreads,
      clearTopic: this.clearTopic,
      addThread: this.addThread,
    }
    return (
      <TopicContext.Provider value={value}>
        {this.props.children}
      </TopicContext.Provider>
    )
  }
}