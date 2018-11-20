import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es'
import {InputItem, List} from 'antd-mobile'
import React, {Component} from 'react'
import Header from '../Header'
import Confirm from './Confirm'

export default class PayOnline extends Component {
  state = {confirmState: 0}

  onConfirm = canContinue => {
    if (!canContinue) this.props.goBack(0)
    else this.setState({confirmState: 1})
  }

  render () {
    return (
      <div>
        <Header goHome={this.props.goHome}>Betalen <FontAwesomeIcon icon="angle-right"/> Aan de deur</Header>
        <List renderHeader={() => "Gegevens"}>
          <InputItem value={this.props.info.firstName} editable={false}>
            Voornaam
          </InputItem>
          <InputItem value={this.props.info.lastName} editable={false}>
            Achternaam
          </InputItem>
          <InputItem value="Aan de deur" editable={false}>
            Methode
          </InputItem>
        </List>
        <Confirm onConfirm={this.onConfirm}/>

      </div>
    )
  }
}