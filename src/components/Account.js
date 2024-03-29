import React from 'react'
import {Redirect} from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer'
import TransferForm from './TransferForm'


const Account = (props) => {

// let account = props.accounts[props.match.params.id - 1]
let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

console.log(account)

return(
  <div>
      <h2>
        {account ? account.name : null} - ${account ? account.balance : null}
      </h2>
    <TransactionsContainer account={account}/>
    <TransferForm/>
  </div>
)

}


export default Account
