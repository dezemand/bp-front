import 'antd-mobile/dist/antd-mobile.css'
import React, {Component} from 'react'
import './App.css'
import Home from './components/home/Home'
import PayFee from './components/payfee/PayFee'

class App extends Component {
  state = {location: "home"}

  choose = which => {
    if (which === "fee")
      this.setState({location: which})
    else if (which === "balloon")
      alert("NO") // this.setState({location: which});
  }

  goHome = () => this.setState({location: "home"})

  render() {
    if (this.state.location === "home")
      return (<div className="App"><Home onClick={this.choose}/></div>)
    if (this.state.location === "fee")
      return (<div className="App"><PayFee goHome={this.goHome}/></div> )
  }
}

export default App;
