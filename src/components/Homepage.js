import React from 'react'
import {Route,Link} from 'react-router-dom'




const Homepage = () =>{

  return(
    <h2>
    WELCOME TO THE FINANCIAL LITERACY!
    <br/>
    <br/>
    <br/>

    To see All Your Accounts <button><Link to='/accounts'>Click Here </Link></button>
    <br/>
    To Add an Account<button><Link to='/accounts/new'> Click Here</Link></button>
    </h2>

  )
}

export default Homepage
