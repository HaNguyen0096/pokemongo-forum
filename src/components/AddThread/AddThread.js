import React, { Component } from 'react'
import TopicContext from '../../contexts/TopicContext'
import ApiService from '../../services/api-service'
import { Button, Textarea } from '../Utils/Utils'
import './AddThread.css'

export default class AddThread extends Component {
  
  static contextType = TopicContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { topic } = this.context
    console.log(topic)
    const { title, content } = ev.target

    ApiService.postThread(topic.id, title.value, content.value)
      .then(this.context.addThread)
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='Thread'
        onSubmit={this.handleSubmit}
      >
        <div className='addThread'>
          <div className='title'>
          <Textarea
            required
            aria-label='Thread Title...'
            name='title'
            id='title'
            cols='30'
            rows='2'
            placeholder='Thread Title..'>
          </Textarea>
          </div>
          <div className='content'>
          <Textarea
            required
            aria-label='Type your thread...'
            name='content'
            id='content'
            cols='30'
            rows='4'
            placeholder='Type your thread..'>
          </Textarea>
          </div>
        </div>

        <Button type='submit'>
          Post Thread
        </Button>
      </form>
    )
  }
}
