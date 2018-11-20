import {InputItem, List} from 'antd-mobile'
import React, {Component} from 'react'

export default class Details extends Component {
  render () {
    return (
      <List renderHeader={() => "Informatie"}>
        <InputItem
          value="Mandjeswaardweg 3"
          editable={false}
        >Locatie</InputItem>
        <InputItem
          value="24 november 2018"
          editable={false}
        >Datum</InputItem>
        <InputItem
          value="Van 20.00 tot 02.00"
          editable={false}
        >Tijd</InputItem>
      </List>
    )
  }
}