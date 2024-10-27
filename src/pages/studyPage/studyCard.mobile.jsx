import React, { useState } from 'react'
import { Card, CardContainer, Content, TextBox, Thumbnail, Title } from '../../styles/emotion/mobile/studyCard.style'

export default function StudyCardMobile({cardInfo}) {

  //클릭하면 해당 사이트로 이동
  const handleClick = () => {
    window.open(cardInfo.url, '_blank', 'noopener,noreferrer');
  };


  return (
      <Card onClick={handleClick} >
          <Thumbnail image={cardInfo.image}/>
          <TextBox>
            <Title>{cardInfo.title}</Title>
            <Content>{cardInfo.content}</Content>
          </TextBox>
      </Card>
  )
}
