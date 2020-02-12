import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import { MainProvider } from './contexts/MainContext'
import './index.css'


ReactDOM.render(
    <BrowserRouter>
        <MainProvider>
            <App />
        </MainProvider>
    </BrowserRouter>,
document.getElementById('root'))