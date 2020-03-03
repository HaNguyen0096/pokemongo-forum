import React, { Component } from 'react'
import ThreadContext from '../../contexts/ThreadContext'
import ApiService from '../../services/api-service'
import { Button, Textarea } from '../Utils/Utils'
import './AddComment.css'

export default class AddComment extends Component {
  
  static contextType = ThreadContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { thread } = this.context
    const { text } = ev.target

    ApiService.postComment(thread.id, text.value)
      .then(this.context.addComment)
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='Comment'
        onSubmit={this.handleSubmit}
      >
        <div className='addComment'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>

        <Button type='submit' className='postCommentBtn'>
          Post comment
        </Button>
      </form>
    )
  }
}
