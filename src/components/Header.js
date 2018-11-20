import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component {
  goHome = e => {
    e.preventDefault()
    if (typeof this.props.goHome === "function")
      this.props.goHome()
    return false
  }

  render () {
    return (
      <header>
        <a href="#" onClick={this.goHome}><FontAwesomeIcon icon="home"/></a>
        {this.props.children}
      </header>
    )
  }
}
