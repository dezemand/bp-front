import React, {Component} from 'react';
import Header from '../Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es'
import {Button, InputItem, List, WhiteSpace, WingBlank} from 'antd-mobile'
import Confirm from './Confirm'

export default class PayOnline extends Component {
  state = {confirmState: 0};

  method = [
    {label: "Betaalverzoekje (iDEAL)", title: "Online"},
    {label: "Aan de deur betalen", title: "Aan de deur"}
  ]

  onConfirm = canContinue => {
    if(!canContinue) this.props.goBack(0);
    else this.setState({confirmState: 1});
  }

  getConfirm() {
    if(this.state.confirmState === 0)
      return (<Confirm onConfirm={this.onConfirm}/>)
  }

  getMethod() {
    return this.method[this.props.info.method];
  }

  render() {
    return (
      <div>
        <Header goHome={this.props.goHome}>
          Betalen <FontAwesomeIcon icon="angle-right"/> {this.getMethod().title}
        </Header>
        <List renderHeader={() => "Gegevens"}>
          <InputItem value={this.props.info.firstName} editable={false}>
            Voornaam
          </InputItem>
          <InputItem value={this.props.info.lastName} editable={false}>
            Achternaam
          </InputItem>
          <InputItem value={this.getMethod().label} editable={false}>
            Methode
          </InputItem>
        </List>
        {this.getConfirm()}
      </div>
    );
  }
}