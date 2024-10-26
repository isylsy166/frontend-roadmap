import React, { useState } from 'react'
import style from '../../../styles/css/layout/layout.module.css'
import StartPage from '../../startPage/startPage'


export default function LayoutPc() {

  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <StartPage/>

    </div>
  )
}