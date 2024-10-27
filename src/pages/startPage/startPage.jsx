import React, { useState } from 'react'
import style from '../../styles/css/layout/startPage.module.css'
import FollowMouse from '../../commons/component/followMouse'
import MainText from './components/mainText'
import { useMediaQuery } from 'react-responsive';

export default function StartPage() {

    const [isHover, setIsHover] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width:580px)" });
    console.log(isMobile);

    if(isMobile){
        return (
            <div className={style.frame}>
                <MainText isHover={isHover} setIsHover={setIsHover} />              
            </div>
        )
    }

    return (
        <div className={style.frame}>
            <FollowMouse isHover={isHover}>
                <MainText isHover={isHover} setIsHover={setIsHover} />              
            </FollowMouse>
        </div>
    )


}
