import React from 'react'
import {connect} from 'react-redux'
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
        <AccountInput/>
        <AccountsList accounts={this.props.accounts} secondprop="hi"/>
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
