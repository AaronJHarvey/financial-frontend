import React from 'react'
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import Timer from './components/Timer'

class App extends React.Component{


  render(){
    return(
      <div className="App">
        <AccountsContainer/>
        <Timer/>
      </div>
    )
  }
}

export default App;
