import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {List, WhiteSpace, WingBlank} from 'antd-mobile'
import Button from 'antd-mobile/es/button/index'
import React, {Component} from 'react'
import Header from '../Header'
import Details from './Details'
import './PayFee.css'
import PaymentMethod from './PaymentMethod'
import PersonalDetails from './PersonalDetails'

export default class EnterDetails extends Component {
  state = {firstName: "", lastName: "", method: 0}

  updatePersonal = (first, last) => this.setState({firstName: first, lastName: last})
  updateMethod = method => this.setState({method: method})
  onClick = () => {
    this.props.onContinue(this.state.firstName, this.state.lastName, this.state.method)
  }

  render () {
    return (
      <div>
        <Header goHome={this.props.goHome}>Betalen <FontAwesomeIcon icon="angle-right"/> Entree</Header>
        <Details/>
        <PersonalDetails onChange={this.updatePersonal}/>
        <PaymentMethod onChange={this.updateMethod}/>
        <List renderHeader={() => "Note"}>
          <List.Item wrap>
            We hebben het liefst dat je online betaalt. Dit is veiliger en makkelijker. Bij het online betalen krijg je
            een code waarmee het controleren sneller gaat, sla deze code op.
          </List.Item>
        </List>
        <WhiteSpace size="lg"/>
        <WingBlank>
          <Button type="primary" onClick={this.onClick}>
            <FontAwesomeIcon icon="arrow-right"/> Volgende
          </Button>
        </WingBlank>
        <WhiteSpace size="lg"/>
      </div>
    )
  }
}
