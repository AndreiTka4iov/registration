import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../styles/signIn/SignIn.module.css'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import Upper from './upper/Upper'

function SignIn() {
  const mode = useSelector(state => state.mode.dark)

  return (
        <div className={mode 
          ? cl.inputMenu + " " + cl.dark
          : cl.inputMenu}>
          <Upper>Sign in</Upper>
          <div className={cl.forma}>
            <h1>Welcome back</h1>
            <span>Please enter your contact details to connect.</span>
            <div className={cl.inputDiv}>
              <h3>Email address</h3>
              <MyInput type="email" placeholder="name@company.com" password={false}/>
              <h3>Password</h3>
              <MyInput type="text" placeholder="****************" password={true}/>
              <div className={cl.password}>
                <input type="checkbox" id="checkbox"/>
                <label htmlFor="checkbox">Remember me</label>
                <a>Forgot password</a>
              </div>
              <MyButton>Log in</MyButton>
              <button className={cl.hrefGoogle}>
                <i className='bx bxl-google'></i>
                <span>Log in whith Google</span>
              </button>
              <span className={cl.signUp}>Don't have an account? <a>Sign up here</a></span>
            </div>           
          </div>
        </div>
  )
}

export default SignIn