import React from 'react'

const Account = (props) => {

let account = props.account[props.match.params.id - 1]
 console.log(account)

return(
  <li>
    {account ? account.name : "hello"} - {account ? account.balance : "hello"}
  </li>
)

}


export default Account
