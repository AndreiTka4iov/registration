import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../styles/signUp/SignUp.module.css'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import Upper from './upper/Upper'

function SignUp() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)

  const signIn = () => {
    document.querySelector('#up').style = "opacity: 0"
    setTimeout(() => {
      dispatch({type: "SIGN_IN"})
    }, 350)
  }

  return (
    <div className={mode 
      ? cl.signUp + " " + cl.dark
      : cl.signUp} id="up">
        <Upper>Sign Up</Upper>
        <h1>Welcome back</h1>
        <span className={cl.span}>Please enter your contact details to connect.</span>
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
          <span>Do you already have an account? <button onClick={() => signIn()}>Sign in here</button></span>
        </div>
    </div>
  )
}

export default SignUp