import React from 'react'

const ShowAccount = (props) => {
  console.log(props)
return(
  <li>
    {props.account.name} - {props.account.balance}
  </li>
)

}


export default ShowAccount
