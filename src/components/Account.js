import React from 'react'
import {Redirect} from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

let account = props.account[props.match.params.id - 1]

return(
  <div>
    <h2>
      {account ? account.name : null} - {account ? account.balance : null}
    </h2>
    <TransactionsContainer account={account}/>
  </div>
)

}


export default Account
