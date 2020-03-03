import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faFolder
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import { TopicProvider } from './contexts/TopicContext'
import { TopicListProvider } from './contexts/TopicListContext'
import { ThreadProvider } from './contexts/ThreadContext'
import './index.css'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble, faFolder)

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