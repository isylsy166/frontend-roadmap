import React from 'react'
import style from '../../../css/layout/layoutPc.module.css'
import FollowMouse from '../../../commons/component/followMouse'
import MainText from './components/mainText'

export default function LayoutPc() {
  return (
    <div className={style.frame}>
        <FollowMouse>
            <MainText/>
        </FollowMouse>
    </div>
  )
}