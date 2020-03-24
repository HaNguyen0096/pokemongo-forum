import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { TopicProvider } from '../../contexts/TopicContext'
import { TopicListProvider } from '../../contexts/TopicListContext'
import { ThreadProvider } from '../../contexts/ThreadContext'

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <TopicListProvider>
      <TopicProvider>
        <ThreadProvider>
          <App />
        </ThreadProvider>
      </TopicProvider>
    </TopicListProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

