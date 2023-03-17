import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../styles/signIn/SignIn.module.css'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function SignIn() {
  const dispatch = useDispatch()
  const passwordType = useSelector(state => state.passwordType.password)
  const mode = useSelector(state => state.mode.dark)


  const showPass = () => {
    dispatch({type: "SHOW_PASS", payload: true})
  }

  const hidepass = () => {
    dispatch({type: "HIDE_PASS", payload: false})
  }

  const setDark = () => {
    dispatch({type: "SET_DARK"})
  } 

  const setLight = () => {
    dispatch({type: "SET_LIGHT"})
  } 

  return (
    <div className={mode 
      ? cl.main + ' ' + cl.dark
      : cl.main
    }>
        <div className={cl.inputMenu}>
          <div className={cl.upper}>
            <div className={cl.logo}>
              <i className='bx bx-log-in-circle'></i>
              <span>Sign in</span>
            </div>
            {mode 
            ? <span className={cl.sun} onClick={() => setLight()}><i className='bx bxs-sun'></i></span>
            : <span className={cl.sun} onClick={() => setDark()}><i className='bx bx-sun'></i></span>
            }
            
          </div>
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
                <a href="">Forgot password</a>
              </div>
              <MyButton>Log in</MyButton>
              <a href="" className={cl.hrefGoogle}>
                <i className='bx bxl-google'></i>
                <span>Log in whith Google</span>
              </a>
              <span className={cl.signUp}>Don't have an account? <a href="">Sign up here</a></span>
            </div>           
          </div>
        </div>
        <div className={cl.photo}>
          <img src="/images/main.jpg" alt="" />
        </div>
    </div>
  )
}

export default SignIn