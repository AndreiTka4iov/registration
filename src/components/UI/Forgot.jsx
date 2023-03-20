import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../styles/forgot/Forgot.module.css'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import Upper from './upper/Upper'

function Forgot() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)

  const signIn = () => {
    document.querySelector('#forgot').style = "opacity: 0"
    setTimeout(() => {
      dispatch({type: "SIGN_IN"})
      dispatch({type: "HIDE_PASS", payload: false})
    }, 350)
  }

  return (
    <div className={mode 
      ? cl.forgot + " " + cl.dark
      : cl.forgot} id="forgot">
        <Upper>Forgot Password</Upper>
        <form>
          <div className={cl.inpBlock}>
            <h3>Email address</h3>
            <MyInput type={"email"} placeholder={"name@company.com"} password={false}/>
            <h3>Password</h3>
            <MyInput placeholder={"****************"} password={true}/>
            <h3>Password again</h3>
            <MyInput placeholder={"****************"} password={true}/>
            <MyButton>Accept</MyButton>
          </div>
          <span className={cl.remember}>If you remember your password <div onClick={() => signIn()}>  Sign in here</div></span>
        </form>
        
    </div>
  )
}

export default Forgot