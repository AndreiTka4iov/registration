import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../../styles/button/MyButton.module.css'

function MyButton({children, ...props}) {
  const mode = useSelector(state => state.mode.dark)
  return (
    <button {...props} className={mode 
      ? cl.myButton + " " + cl.dark
      : cl.myButton}>{children}</button>
  )
}

export default MyButton