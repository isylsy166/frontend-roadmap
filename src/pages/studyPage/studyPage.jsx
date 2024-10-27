import React, { useEffect, useState } from 'react'
import { CardBox, Frame, Title } from '../../styles/emotion/studyPage.style'
import StudyCard from './studyCard';


export default function StudyPage() {

    const [showTitle, setShowTitle] = useState(false);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= 240) { setShowTitle(true);}
            else{ setShowTitle(false); }

            if (window.scrollY >= 850) { setShowCard(true); }
            else { setShowCard(false);}
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <Frame>
        <Title show={showTitle}>More Detail</Title>
        <CardBox show={showCard}>
            {cardInfo.map( card => <StudyCard cardInfo={card}/>)}
        </CardBox>
    </Frame>
  )
}

const cardInfo = [
    {
        image: '/images/JS_icon.png',
        title: 'Modern JavaScript',
        content: '자바스크립트를 공부하며 정리한 내용입니다.\n기본 개념 부터 동작 원리까지',
        url: 'https://accidental-thumb-deb.notion.site/Modern-JavaScript-10e7bb3b3a0f80968c26d87f695af7ff'
    },
    {
        image: '/images/httpIcon.png',
        title: 'HTTP',
    },
    {
        image: '/images/reactIcon.png',
        title: 'React',
    },
  ]
