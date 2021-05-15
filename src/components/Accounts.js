import React from 'react'
import Account from './Account'
import {Route} from 'react-router-dom'

const Accounts = (props) =>{

  return(
    <div>
      {props.accounts.map(account =>
        <div key={account.id}><Account account={account}/></div>)}
    </div>

  )
}

export default Accounts
