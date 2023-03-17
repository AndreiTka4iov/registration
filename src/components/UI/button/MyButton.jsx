import React from 'react'
import { useSelector } from 'react-redux'
import cl from '../../styles/button/MyButton.module.css'

function MyButton({children}) {
  const mode = useSelector(state => state.mode.dark)
  return (
    <button className={mode 
      ? cl.myButton + " " + cl.dark
      : cl.myButton}>{children}</button>
  )
}

export default MyButton