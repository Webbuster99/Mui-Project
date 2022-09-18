import { Facebook, GitHub, Google } from '@mui/icons-material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <div className="wrapper">

        <div className="left">
       <div className="loginButton-google">
        <img src={Google} alt="" />
        Google
       </div>
       <div className="loginButton-facebook">
        <img src={Facebook} alt="" />
        Facebook
       </div>
       <div className="loginButton-github">
        <img src={GitHub} alt="" />
        GitHub
       </div>

        </div>

        <div className="right">
     <input type="email" placeholder="Email" Email />
     <input type="password" placeholder="password" >Password</input>
        </div>

        </div>
    </div>
  )
}

export default Login