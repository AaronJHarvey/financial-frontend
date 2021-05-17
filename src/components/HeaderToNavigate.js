import React from 'react'
import {Link} from 'react-router-dom'

const HeaderToNavigate = (props) => {

  return (
    <div>
      <Link to='/accounts'style={{paddingRight: '50px'}}>Accounts  </Link>
      <Link to='/accounts/new'> Add Account</Link>
    </div>

  )
}

export default HeaderToNavigate
