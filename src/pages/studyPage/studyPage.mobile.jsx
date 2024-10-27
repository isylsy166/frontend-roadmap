import React, { useEffect, useState } from 'react'
import { CardBox, Frame, Title } from '../../styles/emotion/mobile/studyPage.style'
import StudyCardMobile from './studyCard.mobile';
import { cardInfo } from './cardInfo';


export default function StudyPageMobile() {

    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= 9.5) { setShowTitle(true);}
            else{ setShowTitle(false); }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <Frame>
        <Title show={showTitle}>More Detail</Title>
        <CardBox>
            {cardInfo.map( card => <StudyCardMobile cardInfo={card}/>)}
        </CardBox>
    </Frame>
  )
}
