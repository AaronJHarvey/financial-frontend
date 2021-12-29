import React from 'react'
import {Route,Link} from 'react-router-dom'




const Homepage = () =>{

  return(
    <h2>
    WELCOME TO THE FINANCIAL LITERACY!
    <br/>
    <br/>
    <br/>

    To see All Your Accounts <Link to='/accounts'>Click Here </Link>
    <br/>
    To Add an Account<Link to='/accounts/new'> Click Here</Link>
    </h2>

  )
}

export default Homepage
