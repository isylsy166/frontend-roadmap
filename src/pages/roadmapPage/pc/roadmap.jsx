import React, { useState } from 'react'
import style from '../../../styles/css/page/roadmap.module.css'
import RoadmapTitles from './titles/roadmapTitles'
import LayoutContent from '../../layout/pc/layoutContent'

export default function Roadmap() {

  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <div className={style.frame}>
      <RoadmapTitles setShowModal={setShowModal}/>

      <LayoutContent showModal={showModal} setShowModal={setShowModal}>

      </LayoutContent>
    </div>
  )
}
