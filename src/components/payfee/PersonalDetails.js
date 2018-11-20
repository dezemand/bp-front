import {InputItem, List} from 'antd-mobile'
import React, {Component} from 'react'

export default class PersonalDetails extends Component {
  state = {firstName: "", lastName: ""}

  updateFirstname = (first) => {
    this.setState({firstName: first})
    this.props.onChange(first, this.state.lastName)
  }

  updateLastname = (last) => {
    this.setState({lastName: last})
    this.props.onChange(this.state.firstName, last)
  }

  render () {
    return (
      <List renderHeader={() => "Gegevens"}>
        <InputItem name="fname" onChange={this.updateFirstname}>
          Voornaam
        </InputItem>
        <InputItem name="lname" onChange={this.updateLastname}>
          Achternaam
        </InputItem>
      </List>
    )
  }
}