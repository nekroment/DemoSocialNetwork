import React, { useState } from 'react'
import style from './Paginator.module.css'

let Paginator=({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize=10})=>{
    let pagesCount=Math.ceil(totalUsersCount/pageSize);
        let pages=[];
        for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
let [portionNumber, setPortionNumber]=useState(1);
let portionCount=Math.ceil(pagesCount/portionSize);
let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
let rightPortionPageNumber=portionNumber*portionSize;
debugger
    return (
            <div className={style.count}>
                {portionNumber>1 && <button onClick={()=>setPortionNumber(portionNumber-1)}>test</button>}
                {pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => <span className={(currentPage == p ? style.selectPage : '') + ' ' + style.pageNumber} key={p} onClick={() => onPageChanged(p)}>{p}</span>)}
                {portionCount>portionNumber && <button onClick={()=>setPortionNumber(portionNumber+1)}>Next</button>}
            </div>
            
    )
}

export default Paginator;