import React from 'react'
import style from '../../../css/layout/layoutPc.module.css'
import FollowMouse from '../../../commons/component/followMouse'

export default function LayoutPc() {
  return (
    <div className={style.frame}>
        <FollowMouse>
        </FollowMouse>
    </div>
  )
}