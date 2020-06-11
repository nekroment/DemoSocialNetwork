import style from '../../Users/Users.module.css'
import Loader from '../../img/Loader.svg'
import React from 'react'

let Preloader=(props)=>{
    return(
        <div>
            <img className={style.loader} src={Loader}/>
        </div>
        
    )
}

export default Preloader