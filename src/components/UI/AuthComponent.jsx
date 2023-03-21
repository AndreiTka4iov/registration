import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../styles/auth/AuthComponent.module.css'
import Forgot from './Forgot'
import Loader from './Loader/Loader'
import SignIn from './SignIn'
import SignUp from './SignUp'

function AuthComponent() {
  const mode = useSelector(state => state.mode.dark)
  const signType = useSelector(state => state.signIn.signIn)
  const position = useSelector(state => state.position.position)  
  const loader = useSelector(state => state.loader.loader)  

  return (
      <div className={mode 
      ? position 
        ? classes.main + ' ' + classes.dark + ' ' + classes.left
        : classes.main + ' ' + classes.dark
      : position
        ? classes.main + ' ' + classes.left
        : classes.main 
      }>
        <div className={
          signType === "in"  ? classes.screen :
          signType === "up" ? classes.screen + classes.right : 
          signType === "forgot" ? classes.screen : ''}>
            
        {loader ? <Loader/> : ''}

        {signType === "in"  ? <SignIn/> :
        signType === "up" ? <SignUp/> : 
        signType === "forgot" ? <Forgot/> : ''
        }
        </div>
        
        <div className={classes.photo}>
          <img src="https://andreitka4iov.github.io/registration/images/main.jpg" alt="" />
          <h1 id='h1'>{
          signType === "in"  ? "Welcome back" :
          signType === "up" ? "Glad you join us" : 
          signType === "forgot" ? "Forgot password?" : ''
          }</h1>
        </div>
    </div>
  )
}

export default AuthComponent