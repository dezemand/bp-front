import {Button, List, WingBlank} from 'antd-mobile'
import React, {Component} from 'react'

export default class Confirm extends Component {
  goBack = () => this.props.onConfirm(false)
  cont = () => this.props.onConfirm(true)

  render () {
    return (
      <WingBlank>
        <List renderHeader={() => "Confirmatie"}/>
        <Button
          type={"warning"}
          disabled={this.props.disabled}
          style={{display: "inline-block", width: "45%"}}
          onClick={this.goBack}>Wijzig gegevens</Button>
        <Button
          disabled={this.props.disabled}
          style={{display: "inline-block", width: "45%", marginLeft: "10%"}}
          onClick={this.cont}>Ga verder</Button>
      </WingBlank>
    )
  }
}
