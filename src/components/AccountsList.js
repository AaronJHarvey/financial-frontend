import React from 'react'
import ShowAccount from './ShowAccount'

const AccountsList = (props) =>{

  return(

    <div>
    {props.accounts.map(account=>
      <div key={account.id}><ShowAccount account={account}/></div>)}
    </div>
  )
}

export default AccountsList
