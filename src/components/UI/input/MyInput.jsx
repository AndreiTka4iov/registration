import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../styles/input/MyInput.module.css'

const MyInput = ({ type,
                password, 
                ...props}) => {
    const dispatch = useDispatch()
    const passwordType = useSelector(state => state.passwordType.password)
    const mode = useSelector(state => state.mode.dark)
    
    const lockPass = (state) => {
        if (state){
            dispatch({type: "SHOW_PASS", payload: true})
        }else{
            dispatch({type: "HIDE_PASS", payload: false})
        }
    }

    return (
        <div className={mode ? cl.inp + " " + cl.dark : cl.inp}>
            <input {...props} type={password
                ? passwordType 
                    ? "text"
                    : "password"
                : type
            } className={password ? cl : cl.default}/>
            {password
            ? passwordType 
                ? <span onClick={() => lockPass(false)}><i className='bx bx-lock-open-alt'></i></span>
                : <span onClick={() => lockPass(true)}><i className='bx bx-lock-alt' ></i></span>
            : <p></p>
            }
        </div>
    )
}

export default MyInput