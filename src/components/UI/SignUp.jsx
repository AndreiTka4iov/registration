import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../hooks/useInput'
import cl from '../styles/signUp/SignUp.module.css'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import Upper from './upper/Upper'

function SignUp() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)
  const firstname = useInput('', {isEmply: true, minLength: 3})
  const lastname = useInput('', {isEmply: true, minLength: 3})
  const username = useInput('', {isEmply: true, minLength: 4})
  const email = useInput('', {isEmply: true, minLength: 4, isEmail: true})
  const password = useInput('', {isEmply: true, minLength: 6})
  const validation = (
    firstname.inputValid 
    && lastname.inputValid 
    && username.inputValid 
    && email.inputValid 
    && password.inputValid
  )

  const signUp = () =>{
    if(validation){
      dispatch({type: "SIGN", payload: {userName: username.value, email: email.value, firstname: firstname.value, lastname: lastname.value}})
      dispatch({type: "SIGN_IN"})
      dispatch({type: "RIGHT_POSITION"})
    }
  }

  return (
    <div className={mode 
      ? cl.signUp + " " + cl.dark
      : cl.signUp} id="up">
        <Upper>Sign Up</Upper>
        <div className={cl.center}>
          <div className={cl.name}>
            <div className={cl.slName}>
              <h3>Firstname</h3>
              <MyInput 
              onBlur={(e) => firstname.onBlur(e)}  
              onChange={(e) => firstname.onChange(e)} 
              placeholder={"Your firsname"}
              />
            </div>
            <div className={cl.slName}>
              <h3>Lastname</h3>
              <MyInput 
              onBlur={(e) => lastname.onBlur(e)}  
              onChange={(e) => lastname.onChange(e)} 
              placeholder={"Your lastname"}
              />
            </div>
          </div>
          <div className={cl.mainInfo}>
            <h3>Username</h3>
            <MyInput 
            onBlur={(e) => username.onBlur(e)}  
            onChange={(e) => username.onChange(e)} 
            placeholder={"Example"} 
            type={"text"}
            />
            <h3>Email</h3>
            <MyInput 
            onBlur={(e) => email.onBlur(e)}  
            onChange={(e) => email.onChange(e)} 
            placeholder={"name@company.com"} 
            type={"email"}
            />
            <h3>Password</h3>
            <MyInput 
            onBlur={(e) => password.onBlur(e)}  
            onChange={(e) => password.onChange(e)}
            placeholder={"****************"} 
            password/>
            <MyButton disabled={!validation} onClick={() => signUp()}>Sign up</MyButton>
            <span>Do you already have an account? <a href='/registration'>Sign in here</a></span>
          </div>
        </div>
    </div>
  )
}

export default SignUp