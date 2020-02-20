import React from 'react'
import ThreadContext from '../../contexts/ThreadContext'
import config from '../../config'

export default class DeleteThread extends React.Component {
  static defaultProps ={
    onDeleteThread: () => {},
  }
  static contextType = ThreadContext

  handleClickDelete = e => {
    e.preventDefault()
    console.log(this.props)
    const threadId = this.props.id
    fetch(`${config.API_ENDPOINT}/thread/${threadId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        window.location.reload();
      })
      .then(() => {
        this.context.deleteThread(threadId)
        this.props.onDeleteThread(threadId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Thread'>
        <button
          className='Thread__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
      </div>
    )
  }
}

