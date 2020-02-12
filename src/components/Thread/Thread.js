import React from 'react'
import { Link } from 'react-router-dom'
import ThreadContext from '../../contexts/MainContext'
import config from '../../config'
//import config from '../config'
//import './Note.css'

export default class Note extends React.Component {
  static defaultProps ={
    onDeleteThread: () => {},
  }

  static contextType = ThreadContext;

  handleClickDelete = e => {
    e.preventDefault()
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
        this.context.deleteNote(threadId)
        this.props.onDeleteNote(threadId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { id, title, content } = this.props
    return (
      <div className='Thread'>
        <h2 className='Thread__title'>
          <Link to={`/thread/${id}`}>
            {title}
          </Link>
        </h2>
    <h3>{content}</h3>
        {/*<button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>*/}
      </div>
    )
  }
}

