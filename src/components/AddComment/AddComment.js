import React, { Component } from 'react'
import MainContext from '../../contexts/TopicContext'
import ApiService from '../../services/api-service'
import { Button, Textarea } from '../Utils/Utils'

export default class AddComment extends Component {
  
  static contextType = MainContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { thread } = this.props
    console.log(thread)
    const { text } = ev.target

    ApiService.postComment(thread.thread_id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='Comment'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
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

        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
