import React from 'react'
import cl from '../../styles/loader/Loader.module.css'

function Loader() {
  return (
    <div className={cl.loader}>
        <div className={cl.spinner}></div>
    </div>
  )
}

export default Loader