import React from 'react'
import ThreadContext from '../../contexts/ThreadContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../config'

export default class DeleteThread extends React.Component {
  static defaultProps ={
    onDeleteThread: () => {},
  }
  static contextType = ThreadContext

  handleClickDelete = e => {
    e.preventDefault()
    const { comment } =this.props
    console.log(this.props)
    const commentId = comment.id
    fetch(`${config.API_ENDPOINT}/comments/${commentId}`, {
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
        this.context.deleteComment(commentId)
        this.props.onDeleteComment(commentId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <div className='Delete_Comment'>
        <button
          className='Delete_Button'
          type='button'
          onClick={this.handleClickDelete}
        >
         <FontAwesomeIcon icon='trash-alt'/>
         {' '}
          remove
        </button>
      </div>
    )
  }
}

