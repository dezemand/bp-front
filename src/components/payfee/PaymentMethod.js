import {List, Radio} from 'antd-mobile'
import React, {Component} from 'react'

export default class PaymentMethod extends Component {
  methods = [
    {value: 0, label: "Betaalverzoekje (iDEAL)"},
    {value: 1, label: "Aan de deur betalen"}
  ]

  state = {selected: 0}

  onChange = (value) => {
    this.setState({selected: value})
    this.props.onChange(value)
  }

  render () {
    return (
      <List renderHeader={() => "Betaalwijze"}>
        {this.methods.map(i => (
          <Radio.RadioItem key={i.value} checked={this.state.selected === i.value}
                           onChange={() => this.onChange(i.value)}>
            {i.label}
          </Radio.RadioItem>
        ))}
      </List>
    )
  }
}