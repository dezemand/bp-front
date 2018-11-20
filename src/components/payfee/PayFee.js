import React, {Component} from 'react'
import EnterDetails from './EnterDetails'
import Pay from './Pay'
import './PayFee.css'

export default class PayFee extends Component {
  state = {firstName: "", lastName: "", method: 0, progress: 0}

  onContinue = (first, last, method) => {
    this.setState({firstName: first, lastName: last, method: method, progress: 1})
  }

  goBack = progress => {
    this.setState({progress: progress})
  }

  render () {
    const info = {firstName: this.state.firstName, lastName: this.state.lastName, method: this.state.method}
    if (this.state.progress === 0)
      return (<EnterDetails info={info}
                            goHome={this.props.goHome}
                            onContinue={this.onContinue}/>)
    if (this.state.progress === 1)
      return (<Pay info={info}
                   goBack={this.goBack}
                   goHome={this.props.goHome}/>)
    return (<div>Error, invalid state</div>)
  }
}
