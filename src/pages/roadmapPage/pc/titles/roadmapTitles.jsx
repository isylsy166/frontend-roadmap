import React from 'react'
import style from '../../../../styles/css/page/roadmap.module.css'

const titles = [
    { id: 'internet', name: 'Internet'},
    { id: 'html', name: 'HTML'},
    { id: 'css', name: 'CSS'},
    { id: 'javascript', name: 'JavaScript'},
    { id: 'vcs', name: 'Version Control Systems'},
    { id: 'vcshosting', name: 'VCS Hosting'},
    { id: 'writingcss', name: 'Writing CSS'},
    { id: 'cssArchitecture', name: 'CSS Architecture'},
    { id: 'cssPreprocessors', name: 'CSS Preprocessors'},
    { id: 'buildTools', name: 'Build Tools'},
    { id: 'testing', name: 'Testing'},
    { id: 'AuthStrategies', name: 'Authentication Strategies'},
    { id: 'wsb', name: 'Web Security Basics'}
]

export default function RoadmapTitles({setShowModal}) {
  return (
    <div className={style.title_frame}>
        <h1>Front-end</h1>
        {titles.map( title =>
             <>
                <div className={style.vline}></div>
                <div key={title.id} className={style.main} onClick={() => setShowModal(true)}>{title.name}</div>
             </>
        )}
    </div>
  )
}
