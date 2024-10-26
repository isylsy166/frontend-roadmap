import React, { useState } from 'react'
import style from '../../../styles/css/layout/layout.module.css'
import StartPage from '../../startPage/startPage'
import StudyPage from '../../studyPage/studyPage'


export default function LayoutPc() {
  return (
    <div>
      <StartPage/>
      <StudyPage/>
    </div>
  )
}