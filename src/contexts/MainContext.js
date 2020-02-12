import React, {Component} from 'react'

const MainContext = React.createContext({
  threadList: [],
  topicList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTopicList: () => {},
  //addThread: () => {},
  //deleteThread: () => {},
})

export default MainContext

export class MainProvider extends Component {

  state = {
    threadList : [],
    topicList : [],
    error: null,
  };

  setTopicList = topicList => {
    this.setState({topicList})
  }

  setThreadList = threadList => {
    console.log(threadList)
    this.setState({threadList})
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render(){
    const value = {
      threadList: this.state.threadList,
      topicList: this.state.topicList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTopicList: this.setTopicList,
      setThreadList: this.setThreadList,
    }
    return (
      <MainContext.Provider value={value}>
        {this.props.children}
      </MainContext.Provider>
    )
  }
}