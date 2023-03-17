import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../styles/upper/Upper.module.css'

function Upper({children}) {
const dispatch = useDispatch()
const mode = useSelector(state => state.mode.dark)

const setDark = () => {
    dispatch({type: "SET_DARK"})
} 

const setLight = () => {
    dispatch({type: "SET_LIGHT"})
} 
  return (
    <div className={mode 
        ? cl.upper + " " + cl.dark
        : cl.upper 
        }>
        <div className={cl.logo}>
            <i className='bx bx-log-in-circle'></i>
            <span>{children}</span>
        </div>
        {mode 
        ? <span className={cl.sun} onClick={() => setLight()}><i className='bx bxs-sun'></i></span>
        : <span className={cl.sun} onClick={() => setDark()}><i className='bx bx-sun'></i></span>
        }
    </div>
  )
}

export default Upper