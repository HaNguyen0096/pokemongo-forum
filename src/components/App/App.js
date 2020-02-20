import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import MainPage from '../../routes/MainPage/MainPage'
import TopicPage from '../../routes/TopicPage/TopicPage'
import ThreadPage from '../../routes/ThreadPage/ThreadPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
//import ThreadContext from '../../contexts/ThreadContext'
//import config from '../../config'

//import Footer from '../Footer/Footer';
import './App.css'


class App extends Component {

  state = { 
    hasError: false 
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return(
      < >
        <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
        {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route 
              exact
              path={'/'}
              component={MainPage}
            />
            <Route
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact
              path={'/topic/:topicId'}
              component={TopicPage}
            />
            <Route
              path={'/topic/:topicId/:threadId'}
              component={ThreadPage}
            />           
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>        
      </div>
      </>     
    )
  }
}

export default App;
