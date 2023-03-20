import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../hooks/useInput'
import cl from '../styles/signIn/SignIn.module.css'
import MyButton from './button/MyButton'
import MyInput from './input/MyInput'
import Upper from './upper/Upper'

function SignIn() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode.dark)
  const loader = useSelector(state => state.loader.loader)
  const email = useInput('', {isEmply: true, minLength: 4, isEmail: true})
  const password = useInput('', {isEmply: true, minLength: 6})
  
  const switchScreen = (state) => {
    if ( state === "forgot"){
      document.querySelector('#in').style = "opacity: 0"
      setTimeout(() => {
        dispatch({type: "FORGOT_PASS"})
        dispatch({type: "HIDE_PASS", payload: false})
      }, 350)
    }else if (state === "SignUp") {
      document.querySelector('#in').style = "opacity: 0"
      dispatch({type: "LEFT_POSITION"})
      setTimeout(() => {
        dispatch({type: "SIGN_UP"})
        dispatch({type: "HIDE_PASS", payload: false})
      }, 1050)
    }
  }

  const formPreventDefault = (e) => {
    e.preventDefault()
    dispatch({type: "SHOW_LOADER"})
  }

  return (
        <div className={
          mode && loader
            ? cl.inputMenu + " " + cl.dark + " " + cl.loaderShow:
          loader 
            ? cl.inputMenu + " " + cl.loaderShow :
          mode
            ? cl.inputMenu + " " + cl.dark
            : cl.inputMenu
          } 
          id='in'>
          <Upper>Sign in</Upper>
          <div className={cl.forma}>
            <div className={cl.inputDiv}>
              <form>
                <h3>Email address</h3>
                <MyInput onBlur={(e) => email.onBlur(e)} 
                        onChange={(e) => email.onChange(e)} 
                        value={email.value} 
                        name="email" 
                        type="email" 
                        placeholder="name@company.com" 
                        password={false} />
                <h3>Password</h3>
                <MyInput onBlur={(e) => password.onBlur(e)} 
                        onChange={(e) => password.onChange(e)} 
                        value={password.value}
                        placeholder="****************"
                        password={true}/>
                <div className={cl.password}>
                  <input type="checkbox" id="checkbox"/>
                  <label htmlFor="checkbox">Remember me</label>
                  <div className={cl.forgot} onClick={() => switchScreen('forgot')}>Forgot password</div>
                </div>
                <MyButton disabled={!email.inputValid || !password.inputValid} onClick={formPreventDefault} type="submit">Log in</MyButton>
              </form>
              <button className={cl.hrefGoogle}>
                <i className='bx bxl-google'></i>
                <span>Log in whith Google</span>
              </button>
              <span className={cl.signUp}>Don't have an account? <button onClick={() => switchScreen('SignUp')}>Sign up here</button></span>
            </div>           
          </div>
        </div>
  )
}

export default SignIn