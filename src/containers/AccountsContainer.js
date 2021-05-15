import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import AccountsList from '../components/AccountsList'
import AccountInput from '../components/AccountInput'



class AccountsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchAccounts()
  }

  render(){
    return(

      <div>
        <Route path="/accounts/new" component={AccountInput} />
        <Route exact path="/accounts" render={()=> <AccountsList accounts={this.props.accounts}/>} />

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
