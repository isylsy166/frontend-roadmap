import React, { useState } from 'react'
import style from '../../styles/css/page/studyCard.module.css'
import { Card, CardBack, CardContainer, CardFront, Content, Thumbnail, Title } from '../../styles/emotion/studyCard.style'

export default function StudyCard({cardInfo}) {

  const [isHovered, setIsHovered] = useState(false);

  //클릭하면 해당 사이트로 이동
  const handleClick = () => {
    window.open(cardInfo.url, '_blank', 'noopener,noreferrer');
  };


  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card isHovered={isHovered} onClick={handleClick} >

        <div className={style.cardFront}>
          <Thumbnail image={cardInfo.image}/>
          <Title>{cardInfo.title}</Title>
        </div>

        <div className={style.cardBack}>
          <Content>{cardInfo.content}</Content>
        </div>
      </Card>

    </CardContainer>
  )
}
