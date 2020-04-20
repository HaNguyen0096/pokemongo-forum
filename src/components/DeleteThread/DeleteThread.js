import React from 'react'
import ThreadContext from '../../contexts/ThreadContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../config'
import TokenService from '../../services/token-service'

export default class DeleteThread extends React.Component {
  static defaultProps ={
    onDeleteThread: () => {},
  }
  static contextType = ThreadContext

  handleClickDelete = e => {
    e.preventDefault()
    const { thread } =this.props
    console.log(this.props)
    const threadId = thread.id
    fetch(`${config.API_ENDPOINT}/threads/${threadId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        window.history.back();
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
    return (
      <div className='Delete_Thread'>
        <button
          className='Delete_Button'
          type='button'
          onClick={this.handleClickDelete}
        >
         <FontAwesomeIcon icon='trash-alt'/>
         {' '}
          Delete Thread
        </button>
      </div>
    )
  }
}

