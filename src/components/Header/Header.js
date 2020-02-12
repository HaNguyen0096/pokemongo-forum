import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import banner from './go-banner.png'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component{
  handleLogoutClick = () => {
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
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
        <Link
          to='/register'>
          Register
        </Link>
        -
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render(){
    
    return (
      <div className='header'>
        <div className='headerTop'>
          <img src={banner} className="banner" alt="Pokemon GO forum" />
          <div className="loginNav">
            <div className="title">Pokemon GO Forum</div>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </div>
        <nav className='navBar'>
        </nav>
      </div>
    )
  }
}