import React, { useState } from 'react'
import style from '../../styles/css/layout/startPage.module.css'
import FollowMouse from '../../commons/component/followMouse'
import MainText from './components/mainText'

export default function StartPage() {

    const [isHover, setIsHover] = useState(false);

    return (
        <div className={style.frame}>
            <FollowMouse isHover={isHover}>
                <MainText isHover={isHover} setIsHover={setIsHover} />              
            </FollowMouse>
        </div>
    )
}