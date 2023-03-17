import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../styles/auth/AuthComponent.module.css'
import SignIn from './SignIn'

function AuthComponent() {
  const mode = useSelector(state => state.mode.dark)

  return (
      <div className={mode 
      ? classes.main + ' ' + classes.dark
      : classes.main
      }>
        <SignIn/>
        <div className={classes.photo}>
          <img src="/images/main.jpg" alt="" />
        </div>
    </div>
  )
}

export default AuthComponent