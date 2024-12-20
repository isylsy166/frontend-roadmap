import React, { useEffect, useState } from 'react'
import { CardBox, Frame, Title } from '../../styles/emotion/studyPage.style'
import StudyCard from './studyCard';
import { cardInfo } from './cardInfo';


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

