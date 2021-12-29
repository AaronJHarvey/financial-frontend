import React from 'react'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'
import HeaderToNavigate from '../components/HeaderToNavigate'
import Homepage from '../components/Homepage'




class AccountsContainer extends React.Component{
  state = {
    searchTerm: '',
    filteredAccounts: []
  }

  componentDidMount(){
    this.props.fetchAccounts()
  }



  render(){
    return(

      <div>
      <HeaderToNavigate/>
      <br/><br/><br/>



        <Switch>
          <Route exact path='/accounts/new' component={AccountInput}/>
          <Route exact path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts} />}/>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/accounts' render={(routerProps)=><Accounts {...routerProps} accounts={this.props.accounts}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    accounts: state.accounts
  }
}


export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)


// client side routes
// redirect user with account made
// connect provider mapStateToProps
