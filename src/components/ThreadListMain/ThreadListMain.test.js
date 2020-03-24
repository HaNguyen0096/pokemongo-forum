import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ThreadListMain from './ThreadListMain'

const testTopic = [
  {
    id: 1,
    topic_name: 'General',
    topic_content: 'General discussion about Pokemon Go!.'
  },
]

const testThread = [
  {
    id: 1,
    thread_title: 'events',
    thread_content: 'When is Valentine event start?',
    user_id: 1,
    topic_id: 1,
    modified: '2020-02-22T21:28:32.615Z'
  }
]



describe('ThreadList component', () => {

  it('renders ThreadList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <ThreadListMain topic={testTopic} thread={testThread}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})


