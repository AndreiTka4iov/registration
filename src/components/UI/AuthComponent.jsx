import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from '../styles/auth/AuthComponent.module.css'
import SignIn from './SignIn'
import SignUp from './SignUp'

function AuthComponent() {
  const mode = useSelector(state => state.mode.dark)
  const signType = useSelector(state => state.signIn.signIn)

  useEffect(() => {

  }, [signType])

  return (
      <div className={mode 
      ? signType 
        ? classes.main + ' ' + classes.dark + ' ' + classes.up
        : classes.main + ' ' + classes.dark
      : signType
        ? classes.main + ' ' + classes.up
        : classes.main 
      }>
        {signType
          ? <SignIn/>
          : <SignUp/>
        }
        
        <div className={signType
          ? classes.photo
          : classes.photo + " " + classes.up
          }>
          <img src="/images/main.jpg" alt="" />
        </div>
    </div>
  )
}

export default AuthComponent