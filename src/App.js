import React from 'react'
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import Timer from './components/Timer'

class App extends React.Component{


  render(){
    return(
      <div className="App">
        <AccountsContainer/>

      </div>
    )
  }
}

export default App;


// Form with a transfer from and transfer to
//
