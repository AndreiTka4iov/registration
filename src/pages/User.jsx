import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../components/styles/user/User.module.css'
import MyButton from '../components/UI/button/MyButton';
import Upper from '../components/UI/upper/Upper';

function User() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const mode = useSelector(state => state.mode.dark)

    return (
        <div className={mode ? cl.user + " " + cl.dark : cl.user}>
            <h1>{user.userName}</h1>
            
            <div className={cl.info}>
                <Upper></Upper>
                <span className={cl.hello}>Hello <p>{user.firstname} {user.lastname}</p></span>  
                <h3>Your email <span>{user.email}</span></h3>
                <h2>About <span>Me</span></h2>
                <div className={cl.about}>
                    <p>
                    Hello, my name is Andrew, i live in Moscow. 
                    I've been engaged in frontend development for over a year. 
                    I constantly improve my knowledge and skills, actively learn new technologies and apply them in practice. 
                    I study at the third year of university in the direction of "Applied informatics"
                    </p>
                </div>
                <h2>About <span>this project</span></h2>
                <div className={cl.about}>
                    <p>
                    As a frontend developer i focus on visual quality of website, responsibility for any devices and cool animations. 
                    This project is to show examples of my skills in React, Redux and JS with this fancy authorisation page. 
                    Please use links below to contact me.
                    </p>
                </div>
                <div className={cl.contact}>
                    <a href="https://discord.com/users/239443966586519554">
                        <i className='bx bxl-discord-alt' ></i>
                    </a>
                    <a href="https://t.me/Tcka4">
                        <i className='bx bxl-telegram' ></i>
                    </a>
                    <a href="https://github.com/AndreiTka4iov">
                        <i className='bx bxl-github' ></i>
                    </a>
                    <a href="https://www.linkedin.com/in/андрей-ткачев-72734626b/">
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                </div>
                <MyButton onClick={() => dispatch({type: "UN_SIGN"})}>Sign out</MyButton>
            </div>
        </div>
    )
}

export default User