import React, {Component} from 'react'

const ThreadContext = React.createContext({
  thread: null,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setThread: () => {},
  clearThread: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default ThreadContext

export class ThreadProvider extends Component {

  state = {
    thread: null,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setThread = thread => {
    this.setState({ thread })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearThread = () => {
    this.setThread(null)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render(){
    const value = {
      thread: this.state.thread,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setThread: this.setThread,
      setComments: this.setComments,
      clearThread: this.clearThread,
      addComment: this.addComment,
    }
    return (
      <ThreadContext.Provider value={value}>
        {this.props.children}
      </ThreadContext.Provider>
    )
  }
}