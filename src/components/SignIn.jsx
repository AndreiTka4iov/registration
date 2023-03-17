import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../styles/signIn/SignIn.module.css'

function SignIn() {
  const dispatch = useDispatch()
  const passwordType = useSelector(state => state.passwordType.password)

  const showPass = () => {
    dispatch({type: "SHOW_PASS", payload: true})
  }

  const hidepass = () => {
    dispatch({type: "HIDE_PASS", payload: false})
  }

  return (
    <div className={cl.main}>
        <div className={cl.inputMenu}>
          <div className={cl.upper}>
            <div className={cl.logo}>
              <i className='bx bx-log-in-circle'></i>
              <span>Sign in</span>
            </div>
            <span className={cl.sun}>
              <i className='bx bx-sun' ></i>
            </span>
          </div>
          <div className={cl.forma}>
            <h1>Welcome back</h1>
            <span>Please enter your contact details to connect.</span>
            <div className={cl.inputDiv}>
              <h3>Email address</h3>
              <div className={cl.inp}>
                <input type="email" placeholder="name@company.com"/>
              </div>
              <h3>Password</h3>
              <div className={cl.inp}>
                <input placeholder="****************" type={passwordType ? "text" : "password"}/>
                {passwordType 
                ? <span onClick={() => hidepass()}><i className='bx bx-lock-open-alt'></i></span>
                : <span onClick={() => showPass()}><i className='bx bx-lock-alt' ></i></span> 
                }
                
              </div>
              <div className={cl.password}>
                <input type="checkbox" id="checkbox"/>
                <label htmlFor="checkbox">Remember me</label>
                <a href="">Forgot password</a>
              </div>
              <button>Log in</button>
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