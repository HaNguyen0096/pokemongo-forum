import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import { TopicProvider } from './contexts/TopicContext'
import { TopicListProvider } from './contexts/TopicListContext'
import { ThreadProvider } from './contexts/ThreadContext'
import './index.css'


ReactDOM.render(
  <BrowserRouter>
    <TopicListProvider>
      <TopicProvider>
        <ThreadProvider>
          <App />
        </ThreadProvider>
      </TopicProvider>
    </TopicListProvider>
  </BrowserRouter>,
document.getElementById('root'))