import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import banner from './go-banner.png'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    // window.location.reload()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link style={{ textDecoration: 'none' }}
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link className='register-button'
          to='/register'>
          Register
        </Link>
        {' - '}
        <Link className='login-button'
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }


  renderHome(){
    return(
      <div className='homeNav'>
        <Link className='home-nav' to='/'>
          Home
        </Link>
      </div>
    )
  }

  render() {
    console.log('header is running')
    return <>
      <nav className='header'>
        <div className='headerTop'>
          <img src={banner} className="banner" alt="Pokemon GO forum" />
          <div className="loginNav">
            <div className="title">Pokemon GO Forum</div>
            <div>{this.renderHome()}</div>
            <div className='login-button'>
              {console.log(TokenService.hasAuthToken())}
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
            </div>
          </div>
        </div>
      </nav>
    </ >
  }
}