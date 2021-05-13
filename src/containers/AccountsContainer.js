import React from 'react'
import AccountsList from '../components/AccountsList'
import AccountInput from '../components/AccountInput'
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'

class AccountsContainer extends React.Component{

  componentDidMount(){
    fetchAccounts()
  }

  render(){
    return(

      <div>
        <AccountInput/>
        <AccountsList/>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    accounts: state.accounts
  }
}


export default connect(mapStateToProps)(AccountsContainer)
