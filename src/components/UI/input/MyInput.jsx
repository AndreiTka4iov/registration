import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../../styles/input/MyInput.module.css'

function MyInput({type, placeholder, password}) {
    const dispatch = useDispatch()
    const passwordType = useSelector(state => state.passwordType.password)
    const mode = useSelector(state => state.mode.dark)

    const showPass = () => {
        dispatch({type: "SHOW_PASS", payload: true})
    }

    const hidepass = () => {
        dispatch({type: "HIDE_PASS", payload: false})
    }

    return (
        <div className={mode ? cl.inp + " " + cl.dark : cl.inp}>
            <input type={password
                ? passwordType 
                    ? "text"
                    : "password"
                : type
            } placeholder={placeholder}/>
            {password
            ? passwordType 
                ? <span onClick={() => hidepass()}><i className='bx bx-lock-open-alt'></i></span>
                : <span onClick={() => showPass()}><i className='bx bx-lock-alt' ></i></span>
            :  <span></span>
            }
        </div>
    )
}

export default MyInput