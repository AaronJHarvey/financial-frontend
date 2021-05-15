import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import Account from '../components/Account'



class AccountsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchAccounts()
  }

  render(){
    return(

      <div>
        <Route path='/accounts/new' component={AccountInput}/>
        <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} account={this.props.accounts} />}/>
        <Route exact path='/accounts' render={(routerProps)=><Accounts {...routerProps} accounts={this.props.accounts}/>}/>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    accounts: state.accounts
  }
}


export default connect(mapStateToProps,{fetchAccounts})(AccountsContainer)
