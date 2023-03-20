import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../styles/signUp/SignUp.module.css'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import Upper from './upper/Upper'

function SignUp() {
  const mode = useSelector(state => state.mode.dark)

  return (
    <div className={mode 
      ? cl.signUp + " " + cl.dark
      : cl.signUp} id="up">
        <Upper>Sign Up</Upper>
        <div className={cl.center}>
          <div className={cl.name}>
            <div className={cl.slName}>
              <h3>Firstname</h3>
              <MyInput placeholder={"Your firsname"}/>
            </div>
            <div className={cl.slName}>
              <h3>Lastname</h3>
              <MyInput placeholder={"Your lastname"}/>
            </div>
          </div>
          <div className={cl.mainInfo}>
            <h3>Username</h3>
            <MyInput placeholder={"Example"} type={"text"}/>
            <h3>Email</h3>
            <MyInput placeholder={"name@company.com"} type={"email"}/>
            <h3>Password</h3>
            <MyInput placeholder={"****************"} password/>
            <MyButton>Sign up</MyButton>
            <span>Do you already have an account? <a href='/'>Sign in here</a></span>
          </div>
        </div>
    </div>
  )
}

export default SignUp