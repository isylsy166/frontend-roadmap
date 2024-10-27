import React from 'react'
import style from '../../../styles/css/layout/layout.module.css'
import MainText from '../../startPage/components/mainText'
import StartPage from '../../startPage/startPage'
import StudyPage from '../../studyPage/studyPage'
import StudyPageMobile from '../../studyPage/studyPage.mobile'



export default function LayoutMobile() {
  return (
    <>
      <StartPage/>
      <StudyPageMobile/>
    </>
  )
}
