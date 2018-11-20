import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es'
import {InputItem, List, Toast} from 'antd-mobile'
import React, {Component} from 'react'
import ApiRequest from '../../ApiRequest'
import Header from '../Header'
import Confirm from './Confirm'

export default class Pay extends Component {
  state = {confirmState: 0};

  method = [
    {label: "Betaalverzoekje (iDEAL)", title: "Online"},
    {label: "Aan de deur betalen", title: "Aan de deur"}
  ]

  onConfirm = canContinue => {
    if(!canContinue) this.props.goBack(0);
    else {
      Toast.loading("Loading...", 99999999)
      this.setState({confirmState: 1})
      this.apiRequest().then(req => console.log(req))
    }
  }
  apiResponse = () => {
    Toast.hide()
    this.setState({confirmState: 2})
  }

  async apiRequest () {
    const req = new ApiRequest("GET", "/", null)
    await req.doRequest()
    return req
  }

  getMethod() {
    return this.method[this.props.info.method];
  }

  getNextStep () {
    if (this.state.confirmState === 0)
      return (<div/>)
    if (this.state.confirmState === 1)
      return (<div/>)
    if (this.state.confirmState === 2 && this.props.info.method === 0)
      return (<div></div>)
    if (this.state.confirmState === 2 && this.props.info.method === 1)
      return (<div></div>)
  }

  render() {
    window.test = this.apiResponse
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
        <Confirm onConfirm={this.onConfirm} disabled={this.state.confirmState !== 0}/>
        {this.getNextStep()}
      </div>
    );
  }
}